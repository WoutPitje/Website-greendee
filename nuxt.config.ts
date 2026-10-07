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

    // Beveiligingsheaders op elke respons. Het certificaat regelt alleen de
    // versleuteling; deze headers bepalen wat een browser verder wel en niet
    // mag doen met de pagina.
    '/**': {
      headers: {
        // Nuxt vertelt standaard waarmee de site gebouwd is. Dat is gratis
        // informatie voor wie gericht naar een bekend lek zoekt.
        'x-powered-by': '',

        // Een jaar lang alleen nog via https, ook als iemand het adres zonder
        // https intikt. Zonder preload en zonder includeSubDomains, zodat een
        // subdomein dat nog geen certificaat heeft niet onbereikbaar wordt.
        'strict-transport-security': 'max-age=31536000',

        // Geen bestandstype laten raden: een geupload bestand dat zich voordoet
        // als script wordt dan niet alsnog uitgevoerd.
        'x-content-type-options': 'nosniff',

        // De site mag niet in een frame van een andere site staan, zodat
        // niemand er een onzichtbare laag overheen kan leggen.
        'x-frame-options': 'SAMEORIGIN',

        // Bij het doorklikken naar een andere site gaat alleen het domein mee,
        // niet het volledige pad.
        'referrer-policy': 'strict-origin-when-cross-origin',

        // Camera, microfoon en locatie heeft deze site niet nodig.
        'permissions-policy': 'camera=(), microphone=(), geolocation=(), payment=()',

        // Welke bronnen een pagina mag laden. Ruim genoeg voor wat de site
        // echt gebruikt: het lettertype van Google, Analytics na toestemming,
        // de Calendly-agenda en afbeeldingen uit het CMS.
        'content-security-policy': [
          "default-src 'self'",
          // Nuxt zet zijn hydratiegegevens inline in de pagina.
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data: https:",
          "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
          "frame-src https://calendly.com https://*.calendly.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
          "object-src 'none'",
        ].join('; '),
      },
    },
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
      // Booking link for the contact page. De agenda laadt pas na een klik,
      // omdat Calendly eigen cookies plaatst; zie CalendlySection.
      calendlyUrl: 'https://calendly.com/lars-greendee/30min',

      // Meet-ID van GA4. Geen geheim: het staat sowieso in de paginabron. De
      // plugin laadt alleen op de live domeinnaam, zodat staging en lokaal
      // ontwikkelen de statistieken niet vervuilen.
      gaId: 'G-6W5G5WQMKS',

      // Absolute base for canonical URLs, Open Graph tags and the sitemap.
      // Staging overrides this with NUXT_PUBLIC_SITE_URL so it never claims to
      // be production, and anything that is not the live domain is served as
      // noindex (see server/routes/robots.txt.ts).
      siteUrl: 'https://greendee.nl'
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
        // og:title, og:description, og:url, og:type en og:image zet elke pagina
        // zelf via useSeo(); hier staat alleen wat voor de hele site geldt.
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
