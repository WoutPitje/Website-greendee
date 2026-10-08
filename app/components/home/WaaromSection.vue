<template>
  <section class="flex flex-col items-center justify-center gap-8 bg-white px-5 py-16 lg:gap-[30px] lg:px-0 lg:py-[90px]">
    <div class="flex w-full max-w-container flex-col items-start gap-10 lg:flex-row lg:gap-20">
      <div class="flex w-full flex-col items-start justify-center gap-6 lg:w-[470px]">
        <h2 class="text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
          Kies voor een partner die je echt kan helpen
        </h2>
        <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-body lg:tracking-[-0.36px]">
          Advies, makkelijk contact en kennis van subsidies. Daarbij combineren wij
          technische expertise met financiële haalbaarheid en praktische uitvoerbaarheid.
        </p>
        <NuxtLink
          to="/contact"
          class="flex items-center justify-center rounded-full bg-greendee-yellow px-6 py-3.5 text-[16px] font-bold leading-[22px] text-greendee-ink lg:px-5 lg:py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Plan een afspraak in
        </NuxtLink>
      </div>

      <!-- Quote replaced in the v2 feedback round; the yellow underline marks the
           phrase the design emphasises. -->
      <blockquote class="flex w-full flex-col items-start border-l-[5px] border-greendee-green pl-6 lg:flex-1 lg:pl-9">
        <p class="w-full text-[20px] font-bold italic leading-[32px] text-greendee-ink lg:text-[27px] lg:leading-[44px]">
          Niemand is ondernemer geworden om met energie bezig te zijn. Wij nemen dat
          vraagstuk <span class="underline decoration-greendee-yellow decoration-4 [text-decoration-skip-ink:none]">volledig over</span>.
        </p>
      </blockquote>
    </div>

    <div class="flex w-full max-w-container flex-col gap-6 lg:flex-row">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="relative h-[190px] w-full overflow-hidden rounded-2xl lg:w-[368px]"
        :class="stat.highlight ? 'bg-greendee-green' : 'bg-[#f3f3f3]'"
      >
        <p
          class="absolute -top-[18px] right-0 w-[230px] text-right text-[84px] font-bold leading-none"
          :class="stat.highlight ? 'text-white/[0.13]' : 'text-greendee-ink/5'"
          aria-hidden="true"
        >
          {{ stat.ghost }}
        </p>
        <p
          class="absolute left-8 top-[118px] text-[38px] font-bold leading-none"
          :class="stat.highlight ? 'text-white' : 'text-greendee-ink'"
        >
          {{ stat.value }}
        </p>
        <p
          class="absolute left-8 top-[162px] text-[14px] font-medium leading-none"
          :class="stat.highlight ? 'text-white/[0.78]' : 'text-gray-600'"
        >
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// `ghost` is the oversized watermark behind each card, matching `value` so the
// watermark doesn't contradict the number in front of it.
const stats = [
  { ghost: '25+', value: '25+', label: 'bedrijven geholpen', highlight: false },
  { ghost: '99%', value: '99%', label: 'klanttevredenheid', highlight: true },
  { ghost: '5+', value: '5+', label: 'jaar ervaring', highlight: false },
]
</script>
