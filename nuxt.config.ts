// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Site URL for production
  site: {
    url: 'https://greendee.nl'
  },
  
  // The v2 rebuild renamed every service page. These keep existing links and
  // search results working; 301 so search engines transfer the old ranking.
  routeRules: {
    '/netcongestie': { redirect: { to: '/energiesimulaties', statusCode: 301 } },
    '/rendement': { redirect: { to: '/business-cases', statusCode: 301 } },
    '/gebiedsontwikkeling': { redirect: { to: '/offertetrajecten', statusCode: 301 } },
    '/referenties': { redirect: { to: '/projecten', statusCode: 301 } },
    '/vacature': { redirect: { to: '/vacatures', statusCode: 301 } },
  },

  // SSR Node server (Docker/Coolify). Keeps pages dynamic for the
  // upcoming Strapi integration instead of baking them at build time.
  nitro: {
    preset: 'node-server'
  },

  // Server-only; override in Coolify with NUXT_RESEND_API_KEY etc.
  runtimeConfig: {
    // Strapi is reached server-side only and proxied under /cms, so the
    // browser never talks to it directly. That keeps everything same-origin
    // HTTPS — the CMS itself is plain HTTP, which a browser on
    // https://greendee.nl would otherwise block as mixed content.
    strapiUrl: 'http://fehg3brj8o2skmifxdhupc8c.93.127.162.103.sslip.io',
    resendApiKey: '',
    // Comma-separated; every address gets the submission.
    contactTo: 'offerte@greendee.nl',
    // Must be on the domain verified in Resend (mail.greendee.nl), not the
    // apex — the apex is Microsoft 365 and its SPF ends in -all.
    contactFrom: 'GreenDee website <website@mail.greendee.nl>',

    public: {
      // Booking link for the contact page. Set NUXT_PUBLIC_CALENDLY_URL in
      // Coolify once the account exists; until then the page shows the mail
      // form instead of an empty embed.
      calendlyUrl: ''
    }
  },

  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    viewer: true,
  },
  
  // App configuration including base URL and head tags
  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'GreenDee | Duurzame Energie & Netcongestie Oplossingen',
      htmlAttrs: {
        lang: 'nl'
      },
      meta: [
        { name: 'color-scheme', content: 'light' },
        { name: 'description', content: 'GreenDee helpt bedrijven bij netcongestie en energietransitie. Van slimme energieopslag tot projectmanagement. Direct contact: 06-34466611.' },
        { name: 'keywords', content: 'netcongestie, energietransitie, duurzame energie, energieopslag, peakshaving, projectmanagement energie, Lars van Dee, GreenDee, NetcongestieOpgelost' },
        { name: 'author', content: 'Lars van Dee - GreenDee' },
        { name: 'generator', content: 'Nuxt 4' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'GreenDee - Slimme oplossingen voor netcongestie' },
        { property: 'og:description', content: 'Van advies tot realisatie: GreenDee begeleidt uw duurzame energieprojecten.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'nl_NL' },
        { property: 'og:site_name', content: 'GreenDee' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  }
})
