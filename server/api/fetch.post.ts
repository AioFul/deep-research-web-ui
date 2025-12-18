import { fetchUrlContent } from '~~/server/utils/content'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { url, browserlessApiUrl, browserlessToken } = body

  if (!url) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing url parameter',
    })
  }

  const content = await fetchUrlContent(url, browserlessApiUrl, browserlessToken)
  return { content }
})
