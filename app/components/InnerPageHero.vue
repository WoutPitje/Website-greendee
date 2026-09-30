<template>
  <section class="relative h-[620px] overflow-hidden lg:h-[714px]">
    <picture>
      <source :srcset="`${image}-1280.webp 1280w, ${image}-2400.webp 2400w`" type="image/webp">
      <img
        :src="`${image}-2400.jpg`"
        :srcset="`${image}-1280.jpg 1280w, ${image}-2400.jpg 2400w`"
        :alt="imageAlt"
        class="absolute inset-0 size-full object-cover"
      >
    </picture>

    <!-- Darkens the left edge so the copy stays legible over the photo. -->
    <div
      aria-hidden="true"
      class="absolute inset-0"
      style="background-image: linear-gradient(90deg, rgba(0,0,0,0.54) 0%, rgba(0,0,0,0.29) 34%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 100%)"
    />

    <AppHeader />

    <!-- The padding lives here rather than on the section, so it cannot push
         the sticky header down with it. -->
    <div class="relative flex h-full flex-col items-start justify-center px-5 lg:pl-36 lg:pr-0">
    <div class="flex w-full flex-col items-start justify-center gap-5 py-[30px] lg:w-[620px]">
      <p class="text-[15px] font-bold leading-6 tracking-[-0.3px] text-[#a7d88d] lg:text-body lg:tracking-[-0.36px]">
        {{ eyebrow }}
      </p>
      <h1 class="w-full text-[32px] font-bold leading-[40px] tracking-[-0.5px] text-white text-shadow-hero-mobile lg:text-[48px] lg:leading-[56px]">
        {{ title }}
      </h1>
      <p class="w-full text-[16px] font-medium leading-[26px] tracking-[-0.36px] text-white text-shadow-hero-sub lg:text-body">
        {{ intro }}
      </p>
      <NuxtLink
        v-if="ctaLabel"
        :to="ctaTo"
        class="flex items-center justify-center rounded-full bg-greendee-yellow px-6 py-3.5 text-[16px] font-bold leading-[22px] text-greendee-ink lg:px-5 lg:py-4 lg:text-body"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow: string
  title: string
  intro: string
  /** Basename of the optimised set, e.g. `/v2/hero-offertetrajecten`. */
  image: string
  imageAlt?: string
  ctaLabel?: string
  ctaTo?: string
}>(), {
  imageAlt: '',
  ctaLabel: 'Plan een gesprek in',
  ctaTo: '/contact',
})
</script>
