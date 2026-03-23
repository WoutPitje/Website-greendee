<template>
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold leading-7 text-greendee-green">Wat wij doen</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Onze rol
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Wij realiseren een structurele oplossing waarmee uw bedrijf minimaal 10 jaar vooruit kan.
        </p>
        <p class="mt-4 text-base leading-7 text-gray-600">
          We slaan een brug tussen twee werelden; de agrarische en die van de duurzame energie.
        </p>
      </div>

      <!-- Taken -->
      <div class="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-3xl">
        <div v-for="item in taken" :key="item" class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-greendee-green mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          <span class="text-base leading-7 text-gray-600">{{ item }}</span>
        </div>
      </div>

      <!-- Quote box -->
      <div class="mx-auto mt-12 max-w-xl rounded-2xl bg-greendee-green/5 border border-greendee-green/20 p-8 text-center">
        <p class="text-lg font-semibold text-gray-900">Geen theoretisch adviesbureau.</p>
        <p class="mt-2 text-base text-gray-600">Wij bouwen een plan dat contractueel past.</p>
      </div>

      <!-- Team -->
      <div class="mx-auto mt-20 grid max-w-lg grid-cols-2 gap-8 lg:max-w-2xl">
        <div class="text-center">
          <div class="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/netcongestie/contact-1.jpg"
              alt="Marinus van Dee"
              class="h-full w-full object-cover"
            >
          </div>
          <h3 class="mt-4 text-lg font-semibold leading-7 text-gray-900">Marinus van Dee</h3>
        </div>
        <div class="text-center">
          <div class="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/netcongestie/contact-3.jpg"
              alt="Lars van Dee"
              class="h-full w-full object-cover"
            >
          </div>
          <h3 class="mt-4 text-lg font-semibold leading-7 text-gray-900">Lars van Dee</h3>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <a
          href="#contact"
          class="rounded-md bg-greendee-green px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
        >
          Plan een gesprek
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const taken = [
  'We begeleiden het hele proces.',
  'Simuleren flexibiliteit (opslag, laadprofielen, opwek)',
  'Stemmen af met netbeheerder en overige stakeholders.',
  'Werken samen met gecertificeerde installateurs.',
]
</script>
