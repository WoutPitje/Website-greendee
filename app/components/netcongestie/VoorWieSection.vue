<template>
  <section class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-greendee-yellow">Doelgroep</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Voor wie dit relevant is
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Deze aanpak is geschikt voor:
        </p>
      </div>

      <!-- Doelgroepen list -->
      <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-3xl">
        <div v-for="item in doelgroepen" :key="item" class="flex gap-x-4 rounded-xl bg-white/5 border border-white/10 p-5">
          <svg class="h-6 w-6 flex-none text-greendee-yellow mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
          <span class="text-base leading-7 text-gray-200">{{ item }}</span>
        </div>
      </div>

      <!-- Photo mosaic -->
      <div class="mx-auto mt-20 max-w-5xl">
        <div class="columns-2 gap-4 sm:columns-3">
          <div v-for="(img, i) in images" :key="i" class="mb-4 break-inside-avoid overflow-hidden rounded-2xl">
            <img
              :src="img"
              alt=""
              class="w-full object-cover transition-transform duration-300 hover:scale-105"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const doelgroepen = [
  'Akkerbouwers met productbewaring',
  'Telers met drooginstallaties',
  'Veeteeltbedrijven met ventilatie',
  'Koelbedrijven (groente, fruit, vlees)',
  'MKB-ondernemers',
  'Logistiek',
]

const images = [
  '/netcongestie/doelgroep-1.png',
  '/netcongestie/doelgroep-2.png',
  '/netcongestie/doelgroep-3.png',
  '/netcongestie/doelgroep-4.png',
  '/netcongestie/doelgroep-5.png',
  '/netcongestie/doelgroep-6.png',
]
</script>
