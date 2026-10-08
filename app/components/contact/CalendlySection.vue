<template>
  <section class="flex flex-col items-center justify-center gap-8 bg-[#f3f3f3] px-5 py-16 lg:px-0 lg:py-[88px]">
    <div class="flex w-full flex-col items-center gap-[5px] text-center lg:w-[700px]">
      <h2 class="w-full text-[26px] font-bold leading-[34px] text-greendee-ink lg:text-h2 lg:text-black">
        Kies een moment dat jou uitkomt
      </h2>
      <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-body">
        Direct in de agenda van Lars. Je ontvangt meteen een bevestiging.
      </p>
    </div>

    <div class="w-full max-w-container overflow-hidden rounded-[20px] bg-white">
      <iframe
        v-if="calendlyUrl && geladen"
        :src="calendlyUrl"
        title="Plan een gesprek met GreenDee"
        class="h-[700px] w-full border-0"
      />

      <!-- Calendly plaatst eigen cookies zodra de agenda laadt. Daarom staat hij
           niet meteen in de pagina maar achter een klik: wie de agenda opent
           kiest daar bewust voor, en wie dat niet wil kan het formulier
           hieronder gebruiken. -->
      <div v-else-if="calendlyUrl" class="flex flex-col items-center gap-4 px-6 py-16 text-center">
        <p class="max-w-[520px] text-[15px] font-medium leading-6 text-gray-600">
          De online agenda wordt door Calendly geleverd en plaatst eigen cookies.
          Daarom laden wij hem pas als je dat wilt.
        </p>
        <button
          type="button"
          class="flex items-center justify-center rounded-2xl bg-greendee-yellow px-5 py-3 text-[15px] font-bold text-greendee-ink transition-transform hover:-translate-y-0.5"
          @click="geladen = true"
        >
          Agenda laden
        </button>
        <a
          :href="calendlyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[14px] font-semibold text-greendee-green underline underline-offset-2"
        >
          Of open de agenda in een nieuw tabblad
        </a>
      </div>

      <!-- Zonder ingestelde link tonen we geen leeg kader; het mailformulier
           hieronder is dan de manier om contact te leggen. -->
      <p v-else class="px-6 py-16 text-center text-[15px] font-medium text-gray-500">
        De online agenda wordt binnenkort gekoppeld. Gebruik zolang het formulier
        hieronder of bel 06-34466611.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const calendlyUrl = useRuntimeConfig().public.calendlyUrl
const geladen = ref(false)
</script>
