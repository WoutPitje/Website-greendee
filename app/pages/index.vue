<template>
  <div>
    <!-- Hero Section with Background Image -->
    <div class="relative isolate overflow-hidden bg-gray-900 min-h-screen flex items-center">
      <img 
        src="/banner.png" 
        alt="" 
        class="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      >
      
      <!-- Gradient overlays for depth -->
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div 
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-greendee-green to-emerald-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
      
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div class="mx-auto max-w-2xl">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Duurzame energie- en netcongestieprojecten 
              <a href="https://netcongestieopgelost.nl" target="_blank" class="font-semibold text-white">
                <span class="absolute inset-0" aria-hidden="true" />
                NetcongestieOpgelost.nl <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Samen bouwen aan de energietransitie van morgen
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              GreenDee helpt Nederland een stap verder in de energietransitie.<br>
              Met een strategische aanpak en technisch inzicht begeleiden we duurzame energie- en netcongestieprojecten van idee tot uitvoering.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a 
                href="#contact" 
                class="rounded-md bg-greendee-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greendee-green"
              >
                Start een gesprek
              </a>
              <a 
                href="#diensten" 
                class="text-sm font-semibold leading-6 text-white hover:text-gray-300"
              >
                Bekijk diensten <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div 
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-500 to-greendee-green opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </div>

    <!-- Expertise Section -->
    <section id="diensten" class="py-24 sm:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base font-semibold leading-7 text-greendee-green">Expertise</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Van advies tot realisatie
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Met jarenlange ervaring in de energiesector bieden we complete begeleiding voor uw projecten
          </p>
        </div>
        
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <!-- Netcongestie Oplossingen -->
            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-greendee-green/10">
                  <svg class="h-6 w-6 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                Netcongestie Oplossingen
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">
                  Slimme alternatieven voor lange wachttijden. Van energieopslag tot peakshaving, 
                  we vinden oplossingen die vandaag al werken.
                </p>
                <p class="mt-6">
                  <a href="mailto:lars@greendee.nl?subject=Netcongestie%20Advies" class="text-sm font-semibold leading-6 text-greendee-green hover:text-green-600">
                    Meer info <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
            
            <!-- Projectontwikkeling -->
            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-greendee-green/10">
                  <svg class="h-6 w-6 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                Projectontwikkeling
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">
                  Complete begeleiding van duurzame energieprojecten. Van haalbaarheidsstudie tot oplevering, 
                  wij zijn uw partner in elke fase.
                </p>
                <p class="mt-6">
                  <a href="mailto:lars@greendee.nl?subject=Projectontwikkeling" class="text-sm font-semibold leading-6 text-greendee-green hover:text-green-600">
                    Ontdek meer <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
            
            <!-- Strategisch Advies -->
            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-greendee-green/10">
                  <svg class="h-6 w-6 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                Strategisch Advies
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">
                  Data-gedreven inzichten voor betere beslissingen. We analyseren, adviseren en 
                  implementeren oplossingen die écht werken.
                </p>
                <p class="mt-6">
                  <a href="#contact" class="text-sm font-semibold leading-6 text-greendee-green hover:text-green-600">
                    Plan een gesprek <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="overflow-hidden bg-gray-50 py-24 sm:py-32">
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
              <div class="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <img src="/image.png" alt="Lars van Dee" class="w-full h-64 object-cover">
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

    <!-- Contact Section -->
    <section id="contact" class="bg-gray-50">
      <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div class="mx-auto max-w-3xl text-center mb-16">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Klaar voor de volgende stap? Neem direct contact op voor een vrijblijvend gesprek.
            </p>
          </div>
          
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <!-- Phone -->
            <div class="text-center">
              <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-greendee-green/10">
                <svg class="h-8 w-8 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 class="mt-6 text-base font-semibold leading-7 text-gray-900">Telefoon</h3>
              <p class="mt-2 text-base leading-7 text-gray-600">Direct bereikbaar voor vragen</p>
              <a href="tel:0634466611" class="mt-4 text-lg font-semibold text-greendee-green hover:text-green-700">
                06-34466611
              </a>
            </div>
            
            <!-- Email -->
            <div class="text-center">
              <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-greendee-green/10">
                <svg class="h-8 w-8 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 class="mt-6 text-base font-semibold leading-7 text-gray-900">E-mail</h3>
              <p class="mt-2 text-base leading-7 text-gray-600">Stuur een bericht</p>
              <a href="mailto:lars@greendee.nl" class="mt-4 text-lg font-semibold text-greendee-green hover:text-green-700">
                lars@greendee.nl
              </a>
            </div>
            
            <!-- LinkedIn -->
            <div class="text-center">
              <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-greendee-green/10">
                <svg class="h-8 w-8 text-greendee-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h3 class="mt-6 text-base font-semibold leading-7 text-gray-900">LinkedIn</h3>
              <p class="mt-2 text-base leading-7 text-gray-600">Professioneel netwerk</p>
              <a href="https://www.linkedin.com/in/larsvandee/" target="_blank" rel="noopener noreferrer" 
                 class="mt-4 text-lg font-semibold text-greendee-green hover:text-green-700">
                Lars van Dee
              </a>
            </div>
          </div>
          
          <div class="mt-16 text-center">
            <a 
              href="mailto:lars@greendee.nl" 
              class="rounded-md bg-greendee-green px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greendee-green transition-colors"
            >
              Start een gesprek
            </a>
          </div>
        </div>
      </div>
    </section>
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