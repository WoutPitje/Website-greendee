// robots.txt is dynamisch omdat staging en productie hetzelfde beeld draaien.
//
// Staging staat publiek bereikbaar op een sslip.io-adres. Zou dat geindexeerd
// worden, dan concurreert het met greendee.nl om dezelfde teksten. Daarom geeft
// alles wat niet de live domeinnaam is een volledige blokkade terug, en wordt de
// sitemap alleen op productie aangekondigd.

export default defineEventHandler((event) => {
  const basis = String(useRuntimeConfig().public.siteUrl).replace(/\/+$/, '')
  const isProductie = /^https:\/\/(www\.)?greendee\.nl$/.test(basis)

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  if (!isProductie) {
    return 'User-agent: *\nDisallow: /\n'
  }

  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${basis}/sitemap.xml`,
    '',
  ].join('\n')
})
