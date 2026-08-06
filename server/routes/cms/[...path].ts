// Proxies Strapi under /cms so the browser only ever talks to greendee.nl.
//
// Two reasons this exists rather than fetching the CMS directly:
//  - the CMS is served over plain HTTP, and a browser on https://greendee.nl
//    blocks mixed content (both the API call and the images);
//  - same-origin means no CORS setup and no public CMS surface.
//
// Only GET is forwarded; the website has no business writing to the CMS.

export default defineEventHandler(async (event) => {
  if (event.method !== 'GET' && event.method !== 'HEAD') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }

  const config = useRuntimeConfig()
  const base = String(config.strapiUrl).replace(/\/+$/, '')

  if (!base) {
    throw createError({ statusCode: 500, statusMessage: 'CMS is niet geconfigureerd.' })
  }

  const path = (getRouterParam(event, 'path') ?? '').replace(/^\/+/, '')

  // Only the public read surface. Notably keeps /admin and the auth routes out.
  if (!path.startsWith('api/') && !path.startsWith('uploads/')) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }

  const query = getRequestURL(event).search
  return proxyRequest(event, `${base}/${path}${query}`)
})
