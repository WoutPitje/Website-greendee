<template>
  <section class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-greendee-green">Resultaten</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Wat levert dit u concreet op?
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Dat verschilt per situatie, maar vaak ziet men:
        </p>
      </div>

      <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        <!-- Concrete resultaten -->
        <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <h3 class="text-lg font-semibold text-gray-900">Concrete resultaten</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="item in resultaten" :key="item" class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-greendee-green mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              <span class="text-base leading-7 text-gray-600">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Investeringsvoordelen -->
        <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <h3 class="text-lg font-semibold text-gray-900">Uw investering wordt vaak aantrekkelijker door:</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="item in voordelen" :key="item" class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-greendee-yellow mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <span class="text-base leading-7 text-gray-600">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mx-auto mt-12 max-w-xl rounded-2xl bg-greendee-green/5 border border-greendee-green/20 p-8 text-center">
        <p class="text-lg font-semibold text-gray-900">Wij kijken niet alleen technisch, maar ook financieel met u mee.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const resultaten = [
  'Lagere energiekosten',
  'Minder onbalanskosten',
  'Hogere netto-opbrengst uit zonnepanelen',
  'Een stabielere en voorspelbare energierekening',
]

const voordelen = [
  'Energie-investeringsaftrek (EIA)',
  'Kleinschaligheidsinvesteringsaftrek (KIA)',
  'CBC-contract met netbeheerder',
  'Productieve investeringen groen-blauw en dierenwelzijn (agrarisch)',
]
</script>
