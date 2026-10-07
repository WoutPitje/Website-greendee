<template>
  <section class="bg-[#ecf4eb] px-5 py-14 lg:px-36 lg:py-20">
    <div class="mx-auto flex w-full max-w-container flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
      <div class="flex flex-col gap-5 lg:w-[360px] lg:shrink-0">
        <h2 class="text-[28px] font-bold leading-9 text-greendee-ink lg:text-[36px] lg:leading-[44px]">
          Een goede plek om te werken.
        </h2>
        <p class="text-[15px] font-medium leading-relaxed text-greendee-ink">
          Bij GreenDee werken we in een jong en ondernemend team dat elkaar ruimte geeft om
          te groeien. Een fijne werkplek, collega's die er voor elkaar zijn en echte
          aandacht voor ontwikkeling: zo bouwen we samen aan de energietransitie.
        </p>
        <NuxtLink
          to="/vacatures"
          class="text-[16px] font-bold text-greendee-green underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          Bekijk onze vacatures
        </NuxtLink>
      </div>

      <!-- Dezelfde doelen als op de vacaturepagina, maar dan de drie die hier het
           meest zeggen. De volledige lijst staat bij de vacatures. -->
      <dl class="grid flex-1 gap-8 sm:grid-cols-3">
        <div v-for="doel in doelen" :key="doel.label" class="flex flex-col gap-1.5 border-t border-[#c5d4c3] pt-5">
          <dd class="text-[24px] font-bold leading-8 text-greendee-green lg:text-[28px]">{{ doel.waarde }}</dd>
          <dt class="text-[15px] font-bold text-greendee-ink">{{ doel.label }}</dt>
          <p class="text-[14px] font-medium leading-[22px] text-gray-600">{{ doel.toelichting }}</p>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const doelen = [
  { waarde: '8 of hoger', label: 'Medewerkerstevredenheid', toelichting: 'Niemand onder de 6.' },
  { waarde: 'Max. 10%', label: 'Verloop', toelichting: 'Vrijwillig vertrek per jaar.' },
  { waarde: '€ 2.500', label: 'Autonomie en ontwikkeling', toelichting: 'Plus 5 dagen opleiding per jaar.' },
]
</script>
