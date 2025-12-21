import Firecrawl from '@mendable/firecrawl-js'

type WebSearchOptions = {
  maxResults?: number
  /** The search language, e.g. `en`. Only works for Firecrawl. */
  lang?: string
}

type WebSearchFunction = (query: string, options: WebSearchOptions) => Promise<WebSearchResult[]>

export const useWebSearch = (): WebSearchFunction => {
  const { config, webSearchApiBase } = useConfigStore()

  // Use server-side search if configured
  if (config.webSearch.useServer) {
    return async (query: string, options: WebSearchOptions) => {
      console.log(`[WebSearch] Starting server-side search: "${query}"`)
      const startTime = Date.now()

      try {
        const response = await $fetch<{ results: WebSearchResult[] }>('/api/search', {
          method: 'POST',
          body: {
            query,
            options,
            webSearchConfig: config.webSearch,
          },
        })

        const duration = Date.now() - startTime
        console.log(`[WebSearch] Server search completed in ${duration}ms`, {
          query,
          resultCount: response.results.length
        })

        return response.results
      } catch (error: any) {
        const duration = Date.now() - startTime
        console.error(`[WebSearch] Server search failed after ${duration}ms`, {
          query,
          error: error.message
        })
        throw error
      }
    }
  }

  // Otherwise, use client-side search (direct API calls)
  switch (config.webSearch.provider) {
    case 'firecrawl': {
      const fc = new Firecrawl({
        apiKey: config.webSearch.apiKey,
        apiUrl: webSearchApiBase,
      })
      return async (q: string, o: WebSearchOptions) => {
        const results = await fc.search(q, {
          ...o,
          scrapeOptions: {
            formats: ['markdown'], // TODO: verify if this actually works
          },
        })
        if (results.error) {
          throw new Error(results.error)
        }
        return results.data
          .filter((x) => !!x?.markdown && !!x.url)
          .map((r) => ({
            content: r.markdown!,
            url: r.url!,
            title: r.title,
          }))
      }
    }
    case 'searxng': {
      const apiBase = config.webSearch.apiBase
      const browserlessApiUrl = config.webSearch.browserlessApiUrl

      return async (q: string, o: WebSearchOptions) => {
        if (!apiBase) {
          throw new Error('Searxng API URL not set')
        }

        const searchUrl = `${apiBase}/search`
        const response = await $fetch<any>(searchUrl, {
          params: {
            q,
            format: 'json',
            language: o.lang || 'en',
          },
        })

        if (!response.results) {
          return []
        }

        // Limit to top 3 to avoid excessive requests
        const topResults = response.results.slice(0, 3)

        const enrichedResults = await Promise.all(
          topResults.map(async (r: any) => {
            // Use server-side fetch endpoint to get content (handles Browserless or local fetch)
            const { content } = await $fetch<{ content: string }>('/api/fetch', {
              method: 'POST',
              body: {
                url: r.url,
                browserlessApiUrl,
                browserlessToken: config.webSearch.apiKey,
              },
            })
            return {
              content: content || r.content || r.snippet || '',
              url: r.url,
              title: r.title,
            }
          }),
        )

        return enrichedResults.filter((r: any) => r.content.length > 50)
      }
    }
    case 'google-pse': {
      const apiKey = config.webSearch.apiKey
      const pseId = config.webSearch.googlePseId

      return async (q: string, o: WebSearchOptions) => {
        if (!apiKey || !pseId) {
          throw new Error('Google PSE API key or ID not set')
        }

        // Construct Google PSE API URL
        // Ref: https://developers.google.com/custom-search/v1/using_rest
        const searchParams = new URLSearchParams({
          key: apiKey,
          cx: pseId,
          q: q,
          num: o.maxResults?.toString() || '5',
        })
        if (o.lang) {
          searchParams.append('lr', `lang_${o.lang}`)
        }

        const apiUrl = `https://www.googleapis.com/customsearch/v1?${searchParams.toString()}`

        try {
          const response = await $fetch<{
            items?: Array<{ title: string; link: string; snippet: string }>
          }>(apiUrl, {
            method: 'GET',
          })

          if (!response.items) {
            return []
          }

          // Map response to WebSearchResult format
          return response.items.map((item) => ({
            content: item.snippet, // Use snippet as content
            url: item.link,
            title: item.title,
          }))
        } catch (error: any) {
          console.error('Google PSE search failed:', error)
          // Attempt to parse Google API error format
          const errorMessage = error?.data?.error?.message || error.message || 'Unknown error'
          throw new Error(`Google PSE Error: ${errorMessage}`)
        }
      }
    }
    case 'tavily':
    default: {
      const apiKey = config.webSearch.apiKey
      return async (q: string, o: WebSearchOptions) => {
        if (!apiKey) {
          throw new Error('Tavily API key not set')
        }
        const response = await $fetch<{
          results: Array<{ content: string; url: string; title: string }>
        }>('https://api.tavily.com/search', {
          method: 'POST',
          body: {
            api_key: apiKey,
            query: q,
            max_results: o.maxResults,
            search_depth: config.webSearch.tavilyAdvancedSearch ? 'advanced' : 'basic',
            topic: config.webSearch.tavilySearchTopic || 'general',
            include_answer: false,
            include_images: false,
            include_raw_content: false,
          },
        })
        return response.results
          .filter((x) => !!x?.content && !!x.url)
          .map((r) => ({
            content: r.content,
            url: r.url,
            title: r.title,
          }))
      }
    }
  }
}
