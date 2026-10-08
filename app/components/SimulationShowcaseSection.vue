<template>
  <section class="flex flex-col items-center justify-center gap-12 overflow-hidden rounded-t-[32px] bg-[#ecf4eb] px-5 py-16 lg:px-0 lg:py-24">
    <div class="flex w-full flex-col items-center gap-[5px] text-center text-black lg:w-[700px]">
      <h2 class="w-full text-[28px] font-bold leading-[35px] lg:text-h2">Rekenen begint met data.</h2>
      <p class="w-full text-[15px] font-medium leading-6 lg:text-body lg:tracking-[-0.36px]">
        Hoe completer de gegevens, hoe scherper het advies.
      </p>
    </div>

    <figure class="flex w-full flex-col items-start gap-5 overflow-hidden rounded-[20px] border-[1.5px] border-gray-200 bg-white px-5 pb-7 pt-8 lg:w-[900px] lg:px-8">
      <figcaption class="w-full text-[18px] font-bold leading-6 text-greendee-ink">
        Wat een batterij met je piek doet
      </figcaption>

      <div class="relative w-full overflow-x-auto">
        <div class="relative min-w-[600px]">
          <img src="/v2/simulatie-grafiek.svg" alt="" class="h-[230px] w-full" aria-hidden="true">
          <span class="absolute right-0 top-12 text-right text-[12px] font-semibold leading-4 text-gray-500">
            Gecontracteerde capaciteit
          </span>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-x-7 gap-y-2">
        <span v-for="item in legend" :key="item.label" class="flex items-center gap-2">
          <span class="h-[3px] w-[22px] rounded-sm" :class="item.class" />
          <span class="text-[13px] font-medium leading-[18px] text-gray-600">{{ item.label }}</span>
        </span>
      </div>

    </figure>
  </section>
</template>

<script setup lang="ts">
const legend = [
  { label: 'Huidig verbruik', class: 'bg-[#D97706]' },
  { label: 'Met energieopslag', class: 'bg-greendee-green' },
  { label: 'Gecontracteerde capaciteit', class: 'bg-gray-400 opacity-60' },
]
</script>
