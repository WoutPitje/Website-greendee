<template>
  <section id="diensten" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-greendee-green">Expertise</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Energieoplossingen
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <NuxtLink
            v-for="item in diensten"
            :key="item.title"
            :to="item.href"
            class="group flex flex-col items-center text-center rounded-2xl p-6 transition-all hover:bg-gray-50 hover:shadow-lg"
          >
            <img
              :src="item.icon"
              :alt="item.title"
              class="h-36 sm:h-44 w-auto mb-6"
            >
            <h3 class="text-xl font-semibold leading-7 text-gray-900 group-hover:text-greendee-green transition-colors">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-base leading-7 text-gray-600">
              {{ item.description }}
            </p>
            <span class="mt-6 inline-flex items-center gap-x-1 text-sm font-semibold text-greendee-green opacity-0 group-hover:opacity-100 transition-opacity">
              Meer informatie
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const diensten = [
  {
    title: 'Netbewuste Gebiedsontwikkeling',
    description: 'Wij structureren energie, grondposities en infrastructuur tot een uitvoerbare businesscase met een gedegen plan.',
    icon: '/icon-gebiedsontwikkeling.png',
    href: '/gebiedsontwikkeling',
  },
  {
    title: 'Netcongestie',
    description: 'Wij realiseren een structurele oplossing waarmee uw bedrijf minimaal 10 jaar vooruit kan.',
    icon: '/icon-netcongestie.png',
    href: '/netcongestie',
  },
  {
    title: 'Beter secundair rendement',
    description: 'Wie geen opslag en slimme aansturing heeft naast zijn duurzame opwek, blijft afhankelijk van marktprijzen van dat moment. Wij maken duurzame opwek weer rendabel, van businesscase t/m realisatie.',
    icon: '/icon-rendement.png',
    href: '/rendement',
  },
]
</script>
