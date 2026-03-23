<template>
  <div>
    <HeroSection />
    <HeroCta />

    <EnergieOplossingenSection />

    <!-- About Section -->
    <section id="over-ons" class="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-greendee-green">Over GreenDee</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Persoonlijke aanpak, professioneel resultaat
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                GreenDee is opgericht door Lars van Dee. "Met een achtergrond in commerciële economie en 
                jarenlange ervaring in de duurzame energiesector, help ik bedrijven, overheden en netbeheerders 
                bij hun energietransitie."
              </p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute left-1 top-1 h-5 w-5 text-greendee-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Praktische aanpak.
                  </dt>
                  <dd class="inline"> Direct toepasbare oplossingen voor complexe vraagstukken.</dd>
                </div>
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute left-1 top-1 h-5 w-5 text-greendee-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Technisch inzicht.
                  </dt>
                  <dd class="inline"> Diepgaande kennis van energiesystemen en netcongestie.</dd>
                </div>
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute left-1 top-1 h-5 w-5 text-greendee-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    Resultaatgericht.
                  </dt>
                  <dd class="inline"> Focus op succesvolle implementatie en meetbare resultaten.</dd>
                </div>
              </dl>
              
              <div class="mt-10">
                <a 
                  href="https://www.linkedin.com/in/larsvandee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-x-2 text-base font-semibold leading-7 text-greendee-green hover:text-green-600"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect op LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div class="flex items-center justify-center">
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-greendee-green to-emerald-600 rounded-2xl opacity-20 blur-lg"></div>
              <div class="relative bg-white rounded-2xl overflow-hidden shadow-xl w-80">
                <div class="w-full h-80 bg-gray-100">
                  <img src="/image.png" alt="Lars van Dee" class="w-full h-full object-cover">
                </div>
                <div class="p-8">
                  <h3 class="text-xl font-bold text-gray-900">Lars van Dee</h3>
                  <p class="text-gray-600 mt-1">Oprichter GreenDee</p>
                  <div class="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    IJzendoorn, Gelderland
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- References Section -->
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ReferencesSection :featured="true" />
      </div>
    </section>

    <!-- Contact Section -->
    <ContactFormSection />
  </div>
</template>

<script setup>
useHead({
  title: 'GreenDee | Duurzame Energie & Netcongestie Oplossingen - Lars van Dee',
  meta: [
    { 
      name: 'description', 
      content: 'GreenDee helpt bedrijven bij netcongestie en energietransitie. Van slimme energieopslag tot projectmanagement. Direct contact: 06-34466611. Opgericht door Lars van Dee.' 
    },
    {
      name: 'keywords',
      content: 'netcongestie, energietransitie, duurzame energie, energieopslag, peakshaving, projectmanagement energie, Lars van Dee, GreenDee, NetcongestieOpgelost, batterijopslag, energiemanagement, IJzendoorn'
    },
    {
      name: 'author',
      content: 'Lars van Dee - GreenDee'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'language',
      content: 'nl'
    },
    // Open Graph tags voor social media
    {
      property: 'og:title',
      content: 'GreenDee - Slimme oplossingen voor netcongestie en energietransitie'
    },
    {
      property: 'og:description',
      content: 'Van advies tot realisatie: GreenDee begeleidt uw duurzame energieprojecten. Netcongestie oplossingen, projectontwikkeling en strategisch advies.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://greendee.nl'
    },
    {
      property: 'og:locale',
      content: 'nl_NL'
    },
    {
      property: 'og:site_name',
      content: 'GreenDee'
    },
    {
      property: 'og:image',
      content: '/logo-primary.png'
    },
    // Twitter Card tags
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'GreenDee - Duurzame Energie & Netcongestie Oplossingen'
    },
    {
      name: 'twitter:description',
      content: 'Slimme oplossingen voor netcongestie. Van energieopslag tot projectmanagement. Neem contact op: 06-34466611'
    },
    {
      name: 'twitter:image',
      content: '/logo-primary.png'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://greendee.nl'
    }
  ]
})
</script>