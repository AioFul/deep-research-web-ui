import { createServerWebSearch } from './research.post'
import type { ConfigWebSearch } from '~~/shared/types/config'

export default defineEventHandler(async (event) => {
  const startTime = Date.now()
  const runtimeConfig = useRuntimeConfig()
  const body = await readBody(event)

  const { query, options, webSearchConfig } = body

  // Validate required parameters
  if (!query) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required parameter: query',
    })
  }

  if (!webSearchConfig) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required parameter: webSearchConfig',
    })
  }

  console.log(`[SearchAPI] Starting search for query: "${query}"`, {
    provider: webSearchConfig.provider,
    timestamp: new Date().toISOString()
  })

  try {
    // Create server-side web search function using client-provided config
    const serverWebSearch = await createServerWebSearchWithConfig(
      runtimeConfig,
      webSearchConfig
    )

    // Execute search
    const searchStartTime = Date.now()
    const results = await serverWebSearch(query, options || {})

    const duration = Date.now() - searchStartTime
    console.log(`[SearchAPI] Search completed in ${duration}ms`, {
      query,
      provider: webSearchConfig.provider,
      resultCount: results.length
    })

    return { results }
  } catch (error: any) {
    const duration = Date.now() - startTime
    console.error(`[SearchAPI] Search failed after ${duration}ms`, {
      query,
      provider: webSearchConfig.provider,
      error: error.message,
      stack: error.stack
    })
    throw createError({
      statusCode: 500,
      statusMessage: `Search failed: ${error.message}`,
    })
  }
})

/**
 * Creates a server-side web search function using the provided config
 * Similar to createServerWebSearch but accepts dynamic config
 */
async function createServerWebSearchWithConfig(
  runtimeConfig: any,
  webSearchConfig: ConfigWebSearch
) {
  const { tavily } = await import('@tavily/core')
  const { default: Firecrawl } = await import('@mendable/firecrawl-js')
  const { fetchUrlContent } = await import('~~/server/utils/content')

  return async (query: string, options: { maxResults?: number; lang?: string }) => {
    const provider = webSearchConfig.provider
    const apiKey = webSearchConfig.apiKey
    const apiBase = webSearchConfig.apiBase

    // Create AbortController for timeout control
    const controller = new AbortController()
    const timeoutId = setTimeout(() => {
      controller.abort()
      console.error(`[SearchAPI] Search timeout for query: "${query}" after 30s`)
    }, 30000) // 30 second timeout

    try {
      switch (provider) {
        case 'searxng': {
          // Frontend uses apiBase field for SearXNG URL
          const searxngUrl = webSearchConfig.apiBase || runtimeConfig.public.searxngApiUrl
          const browserlessApiUrl = webSearchConfig.browserlessApiUrl || runtimeConfig.public.browserlessApiUrl

          if (!searxngUrl) {
            throw new Error('Searxng API URL not set')
          }

          const searchUrl = `${searxngUrl}/search`
          const response = await $fetch<any>(searchUrl, {
            params: {
              q: query,
              format: 'json',
              language: options.lang || 'en',
            },
            signal: controller.signal, // Add timeout signal
          })

          if (!response.results || response.results.length === 0) {
            if (response.unresponsive_engines && response.unresponsive_engines.length > 0) {
              console.warn(
                `[SearXNG] No results. Unresponsive engines: ${JSON.stringify(response.unresponsive_engines)}`,
              )
            } else {
              console.warn(`[SearXNG] No results found for query: "${query}"`)
            }
            return []
          }

          // Searxng returns snippets, so we need to fetch full content for top results
          // Limit to top 3 to avoid excessive requests
          const topResults = response.results.slice(0, 3)

          const enrichedResults = await Promise.all(
            topResults.map(async (r: any) => {
              const content = await fetchUrlContent(r.url, browserlessApiUrl, apiKey)
              return {
                content: content || r.content || r.snippet || '',
                url: r.url,
                title: r.title,
              }
            }),
          )

          return enrichedResults.filter((r) => r.content.length > 50) // Filter out empty/short content
        }

        case 'firecrawl': {
          if (!apiKey) {
            throw new Error('Firecrawl API key not set')
          }

          const fc = new Firecrawl({
            apiKey,
            apiUrl: apiBase || 'https://api.firecrawl.dev',
          })
          const results = await fc.search(query, {
            maxResults: options.maxResults || 5,
            scrapeOptions: {
              formats: ['markdown'],
            },
          })
          if (results.error) {
            throw new Error(results.error)
          }
          return results.data
            .filter((x: any) => !!x?.markdown && !!x.url)
            .map((r: any) => ({
              content: r.markdown!,
              url: r.url!,
              title: r.title,
            }))
        }

        case 'google-pse': {
          const pseId = webSearchConfig.googlePseId || runtimeConfig.public.googlePseId
          if (!apiKey) {
            throw new Error('Google PSE API key not set')
          }
          if (!pseId) {
            throw new Error('Google PSE ID not set')
          }

          // Construct Google PSE API URL
          const searchParams = new URLSearchParams({
            key: apiKey,
            cx: pseId,
            q: query,
            num: (options.maxResults || 5).toString(),
          })
          if (options.lang) {
            searchParams.append('lr', `lang_${options.lang}`)
          }

          const apiUrl = `https://www.googleapis.com/customsearch/v1?${searchParams.toString()}`

          const response = (await $fetch(apiUrl, {
            method: 'GET',
            signal: controller.signal // Add timeout signal
          })) as any

          if (!response.items) {
            return []
          }

          return response.items.map((item: any) => ({
            content: item.snippet,
            url: item.link,
            title: item.title,
          }))
        }

        case 'tavily':
        default: {
          if (!apiKey) {
            throw new Error('Tavily API key not set')
          }

          const tvly = tavily({ apiKey })
          const results = await tvly.search(query, {
            maxResults: options.maxResults || 5,
            searchDepth: webSearchConfig.tavilyAdvancedSearch ? 'advanced' : 'basic',
            topic: webSearchConfig.tavilySearchTopic || 'general',
          })

          return results.results
            .filter((x: any) => !!x?.content && !!x.url)
            .map((r: any) => ({
              content: r.content,
              url: r.url,
              title: r.title,
            }))
        }
      }
    } catch (error) {
      clearTimeout(timeoutId)
      if (error.name === 'AbortError') {
        throw new Error('Search request timed out after 30 seconds')
      }
      throw error
    } finally {
      clearTimeout(timeoutId)
    }
  }
}
