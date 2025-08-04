// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Site URL for production
  site: {
    url: 'https://greendee.nl'
  },
  
  // Enable static site generation
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/app/assets/css/tailwind.css',
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
