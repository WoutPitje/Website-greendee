<template>
  <section class="flex flex-col items-center justify-center gap-8 bg-[#f3f3f3] px-5 py-16 lg:px-0 lg:py-[88px]">
    <div class="flex w-full flex-col items-center gap-[5px] text-center lg:w-[700px]">
      <h2 class="w-full text-[26px] font-bold leading-[34px] text-greendee-ink lg:text-h2 lg:text-black">
        Kies een moment dat u uitkomt
      </h2>
      <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-body">
        Direct in de agenda van Lars. U ontvangt meteen een bevestiging.
      </p>
    </div>

    <div class="w-full max-w-container overflow-hidden rounded-[20px] bg-white">
      <iframe
        v-if="calendlyUrl"
        :src="calendlyUrl"
        title="Plan een gesprek met GreenDee"
        class="h-[700px] w-full border-0"
        loading="lazy"
      />
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
</script>
