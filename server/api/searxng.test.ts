import { describe, it, expect, vi } from 'vitest'
import { fetchUrlContent } from '../utils/content'

// Mock $fetch global
const mockFetch = vi.fn()
global.$fetch = mockFetch as any

describe('Content Fetching Utility', () => {
  it('should fetch content using Browserless when configured', async () => {
    mockFetch.mockResolvedValueOnce({ data: { text: 'Browserless Content' } })
    const content = await fetchUrlContent('http://example.com', 'http://browserless:3000')
    expect(content).toBe('Browserless Content')
    expect(mockFetch).toHaveBeenCalledWith(
      'http://browserless:3000/content',
      expect.objectContaining({
        method: 'POST',
        body: { url: 'http://example.com' },
      }),
    )
  })

  it('should fallback to local fetch when Browserless fails', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Browserless Error'))
    mockFetch.mockResolvedValueOnce('<html><body><h1>Local Content</h1></body></html>')

    const content = await fetchUrlContent('http://example.com', 'http://browserless:3000')
    expect(content).toContain('Local Content')
  })

  it('should use local fetch when Browserless is not configured', async () => {
    mockFetch.mockResolvedValueOnce('<html><body><h1>Direct Content</h1></body></html>')
    const content = await fetchUrlContent('http://example.com')
    expect(content).toContain('Direct Content')
  })
})
