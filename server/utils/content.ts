import * as cheerio from 'cheerio'
import TurndownService from 'turndown'

export async function fetchUrlContent(url: string, browserlessApiUrl?: string): Promise<string> {
  try {
    // 1. Try Browserless if configured
    if (browserlessApiUrl) {
      try {
        const response = await $fetch<{ data: { text: string } }>(`${browserlessApiUrl}/content`, {
          method: 'POST',
          body: { url },
        })
        if (response?.data?.text) {
          return response.data.text
        }
      } catch (e) {
        console.warn(`[Browserless] Failed to fetch ${url}, falling back to local fetch:`, e)
      }
    }

    // 2. Fallback to local fetch + cheerio + turndown
    const html = await $fetch<string>(url)
    const $ = cheerio.load(html)

    // Remove unwanted elements
    $('script, style, nav, footer, header, aside, iframe, noscript').remove()

    // Get main content (heuristic)
    const content = $('main, article, #content, .content, body').first().html() || $('body').html() || ''

    // Convert to Markdown
    const turndownService = new TurndownService()
    return turndownService.turndown(content)
  } catch (e) {
    console.error(`[Content Fetch] Failed to fetch ${url}:`, e)
    return ''
  }
}
