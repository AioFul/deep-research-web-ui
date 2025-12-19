import * as cheerio from 'cheerio'
import TurndownService from 'turndown'

export async function fetchUrlContent(
  url: string,
  browserlessApiUrl?: string,
  browserlessToken?: string,
): Promise<string> {
  try {
    let html = ''

    // 1. Try Browserless if configured
    if (browserlessApiUrl) {
      try {
        const query: Record<string, string> = {}
        if (browserlessToken) {
          query.token = browserlessToken
        }
        const browserlessResponse = await $fetch<string>( // Expecting direct HTML response
          `${browserlessApiUrl}/content`,
          {
            method: 'POST',
            body: { url },
            query,
            timeout: 15000,
          },
        )
        if (browserlessResponse) { // If Browserless returns any content
          html = browserlessResponse
        }
      } catch (e: any) {
        console.warn(`[Browserless] Failed to fetch ${url}, returning empty string: ${e.message}`)
        return '' // If Browserless fails, directly return empty string
      }

    } else {	// 2. Fallback to local fetch + cheerio + turndown

      // Mimic a real browser to avoid 403s
      const headers = {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        Referer: 'https://www.google.com/',
      }

      try {
        html = await $fetch<string>(url, {
          headers,
          timeout: 10000, // 10s timeout
          retry: 2,
          retryDelay: 500,
        })
      } catch (e: any) {
        console.warn(`[Content Fetch] Failed to fetch ${url}: ${e.message}`)
        return ''
      }
    }

    const $ = cheerio.load(html)

    // Remove unwanted elements (expanded list)
    const noiseSelectors = [
      'script',
      'style',
      'nav',
      'footer',
      'header',
      'aside',
      'iframe',
      'noscript',
      '.ads',
      '.ad',
      '.advertisement',
      '.social-share',
      '.share-buttons',
      '.sidebar',
      '.widget',
      '.cookie-consent',
      '.popup',
      '.modal',
      '.comment',
      '.comments',
      '#comments',
      '.related-posts',
      '.recommended',
      '[role="banner"]',
      '[role="navigation"]',
      '[role="contentinfo"]',
    ]
    $(noiseSelectors.join(', ')).remove()

    // Get main content (heuristic strategy)
    // Try to find the specific article tag first, then common ID/classes
    let content = ''
    const contentSelectors = [
      'article',
      'main',
      '.post-content',
      '.article-content',
      '.entry-content',
      '#content',
      '.content',
      '#main',
    ]

    for (const selector of contentSelectors) {
      const element = $(selector)
      if (element.length > 0 && element.text().trim().length > 100) {
        content = element.html() || ''
        break
      }
    }

    // Fallback: use body if specific selectors fail
    if (!content) {
      content = $('body').html() || ''
    }

    // Convert to Markdown
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
    })

    // Configure turndown to ignore images if needed, or keep them.
    // Usually for "reading", images might be distraction or broken links, but let's keep them simple.
    turndownService.remove(['script', 'style', 'iframe'])

    return turndownService.turndown(content)
  } catch (e: any) {
    // Only log the message for network errors to avoid noisy stack traces
    console.warn(`[Content Fetch] Failed to fetch ${url}: ${e.message}`)
    return ''
  }
}
