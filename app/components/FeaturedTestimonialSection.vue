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
      <p class="text-[18px] font-bold text-greendee-yellow" aria-label="Vijf van de vijf sterren">★★★★★</p>

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
withDefaults(defineProps<{
  eyebrow?: string
  title?: string
}>(), {
  eyebrow: 'Wat klanten zeggen',
  title: 'Beoordeeld met een 9.9',
})

// One quote, taken from the same Strapi collection as the homepage band.
const { data: testimonials } = await useTestimonials(1)
const testimonial = computed(() => testimonials.value?.[0] ?? null)
</script>
