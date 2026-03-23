<template>
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Realiteit -->
      <div class="mx-auto max-w-3xl">
        <h2 class="text-base font-semibold leading-7 text-greendee-green">Het probleem</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          De realiteit van vandaag
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Veel ondernemers merken het pas laat:
        </p>
        <ul class="mt-8 space-y-4">
          <li v-for="item in pijnpunten" :key="item" class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-red-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
            <span class="text-base leading-7 text-gray-600">{{ item }}</span>
          </li>
        </ul>
        <div class="mt-10 rounded-2xl bg-gray-50 border border-gray-200 p-8">
          <p class="text-lg font-semibold text-gray-900">De oorspronkelijke businesscase klopt niet meer.</p>
          <p class="mt-2 text-base text-gray-600">U heeft geïnvesteerd in zonne-energie. Maar het rendement loopt terug.</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="mx-auto max-w-3xl my-20 border-t border-gray-200" />

      <!-- Aanpak -->
      <div class="mx-auto max-w-3xl">
        <h2 class="text-base font-semibold leading-7 text-greendee-green">Onze aanpak</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Wat wij anders doen
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Wij maken uw duurzame opwek weer rendabel.
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
          <div v-for="item in aanpak" :key="item.title" class="relative pl-12">
            <div class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-greendee-green">
              <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
            </div>
            <p class="text-base font-semibold leading-7 text-gray-900">{{ item.title }}</p>
            <p class="mt-2 text-base leading-7 text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-2xl bg-greendee-green/5 border border-greendee-green/20 p-8 sm:p-10 max-w-3xl mx-auto text-center">
        <p class="text-lg font-semibold text-gray-900">Ontdek hoe u meer rendement haalt uit uw energiebron, zonder extra risico.</p>
        <p class="mt-2 text-base text-gray-600">Vrijblijvend · Zakelijk · Gericht op rendement</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const pijnpunten = [
  'Teruglevering levert nauwelijks nog iets op.',
  'Onbalanskosten verminderen het overgebleven rendement.',
  'Netbeheerkosten zorgen voor onverwachte facturen.',
]

const aanpak = [
  {
    title: 'Zonne-energie opslaan',
    description: 'Zonne-energie opslaan in plaats van deze goedkoop of negatief terug te leveren.',
  },
  {
    title: 'Slim inzetten vanuit opslag',
    description: 'Energie uit opslag gebruiken wanneer het financieel het meest gunstig is.',
  },
  {
    title: 'Onbalanskosten vermijden',
    description: 'Onbalanskosten vermijden van oudbollige energieleveranciers.',
  },
  {
    title: 'Verhoog uw zelfconsumptie',
    description: 'Verhoog uw eigen verbruik en word minder afhankelijk van het net.',
  },
  {
    title: 'Grip op uw kosten',
    description: 'Grip op piek-, energie-, en netbeheerkosten.',
  },
  {
    title: 'Lokale energie-afnemers',
    description: 'Mogelijkheden onderzoeken met lokale energie-afnemers.',
  },
]
</script>
