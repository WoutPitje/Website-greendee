<template>
  <section
    v-if="testimonial"
    class="flex flex-col items-center justify-center gap-12 overflow-hidden rounded-[32px] bg-[#ecf4eb] px-5 py-16 lg:px-0 lg:py-[100px]"
  >
    <div class="flex w-full flex-col items-center gap-[5px] text-center font-bold lg:w-[700px]">
      <p class="text-[15px] leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
        {{ eyebrow }}
      </p>
      <h2 class="w-full text-[28px] leading-[35px] text-greendee-ink lg:text-h2">{{ title }}</h2>
    </div>

    <figure class="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl bg-white px-6 py-10 shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] lg:w-[760px] lg:px-16 lg:py-12">
      <img src="/v2/quote-mark-lg.svg" alt="" class="h-8 w-10" aria-hidden="true">
      <!-- Halve ster via een geel laagje dat over de grijze sterren wordt
           afgesneden; dat geeft elke score zonder losse icoonbestanden. -->
      <p
        class="relative inline-block text-[18px] font-bold leading-none text-gray-300"
        :aria-label="`${sterrenLabel} van de vijf sterren`"
      >
        <span aria-hidden="true">★★★★★</span>
        <span
          aria-hidden="true"
          class="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-greendee-yellow"
          :style="{ width: `${(score / 5) * 100}%` }"
        >★★★★★</span>
      </p>

      <blockquote class="w-full text-center text-[19px] font-semibold leading-[28px] text-greendee-ink lg:text-[22px] lg:leading-8">
        {{ testimonial.quote }}
      </blockquote>

      <figcaption class="flex flex-col items-center gap-0.5">
        <p class="text-[15px] font-bold text-greendee-ink">{{ testimonial.authorName }}</p>
        <p class="text-[13px] font-medium text-gray-500">{{ testimonial.authorCompany }}</p>
      </figcaption>
    </figure>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  /** Gemiddelde beoordeling op een schaal van 5. */
  score?: number
}>(), {
  eyebrow: 'Wat klanten zeggen',
  title: 'Beoordeeld met 4,5 van de 5 sterren',
  score: 4.5,
})

const sterrenLabel = computed(() => String(props.score).replace('.', ','))

// One quote, taken from the same Strapi collection as the homepage band.
const { data: testimonials } = await useTestimonials(1)
const testimonial = computed(() => testimonials.value?.[0] ?? null)
</script>
