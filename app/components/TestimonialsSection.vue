<template>
  <!-- Hidden until there is something to show, so the page never has an empty
       band where the quotes should be. -->
  <section
    v-if="testimonials.length"
    class="flex w-full flex-col items-center justify-center gap-12 bg-white px-5 py-16 lg:px-0 lg:py-24"
    :class="rounded ? 'overflow-hidden rounded-[32px]' : ''"
  >
    <div class="flex w-full flex-col items-center gap-[5px] text-center font-bold lg:w-[700px]">
      <p class="text-[15px] leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
        Testimonials
      </p>
      <h2 class="text-[28px] leading-[35px] text-greendee-ink lg:text-h2">
        Ervaringen van onze klanten.
      </h2>
    </div>

    <div class="flex w-full max-w-container flex-col items-stretch gap-6 lg:flex-row">
      <figure
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="flex flex-1 flex-col items-start gap-6 overflow-hidden rounded-2xl bg-[#f3f3f3] px-6 py-7"
      >
        <img src="/v2/quote-mark.svg" alt="" class="h-[22px] w-7" aria-hidden="true">

        <blockquote class="w-full text-[16px] font-semibold leading-6 text-greendee-ink">
          {{ testimonial.quote }}
        </blockquote>

        <figcaption class="mt-auto flex items-center gap-2.5">
          <img
            v-if="testimonial.avatar"
            :src="testimonial.avatar"
            alt=""
            class="size-9 rounded-full object-cover"
          >
          <img v-else src="/v2/avatar-placeholder.svg" alt="" class="size-9" aria-hidden="true">
          <div class="flex flex-col items-start">
            <p class="text-[13px] font-bold text-greendee-ink">{{ testimonial.authorName }}</p>
            <p class="text-[12px] font-medium text-gray-600">{{ testimonial.authorCompany }}</p>
          </div>
        </figcaption>
      </figure>
    </div>

    <!-- Variant 4 (Business Cases) sluit af met drie puntjes. -->
    <div v-if="showDots" class="flex items-center gap-2.5" aria-hidden="true">
      <span v-for="n in 3" :key="n" class="size-1.5 rounded-full" :class="n === 1 ? 'bg-greendee-green' : 'bg-gray-300'" />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  /** The homepage band sits in a rounded card; variant 4 runs edge to edge. */
  rounded?: boolean
  showDots?: boolean
}>(), { rounded: true, showDots: false })

const { data: testimonials } = await useTestimonials(3)
</script>
