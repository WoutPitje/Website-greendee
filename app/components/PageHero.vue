<template>
  <section class="relative flex flex-col items-center justify-center overflow-hidden px-5 lg:px-0" :class="heightClass">
    <!-- Background photo. The design crops it larger than the frame and offsets it,
         so the windmills sit where they do in Figma. -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 overflow-hidden">
        <picture>
          <source :srcset="`${image}-1280.webp 1280w, ${image}-2400.webp 2400w`" type="image/webp">
          <img
            :src="`${image}-2400.jpg`"
            :srcset="`${image}-1280.jpg 1280w, ${image}-2400.jpg 2400w`"
            alt=""
            class="absolute inset-0 size-full max-w-none object-cover object-[72%_50%] lg:object-center lg:inset-auto lg:left-[-7.36%] lg:top-[-19.41%] lg:h-[138.68%] lg:w-[114.66%]"
          >
        </picture>
      </div>
      <div class="absolute inset-0 bg-greendee-green/[0.03]" />
    </div>

    <AppHeader />

    <div class="relative flex w-full flex-col items-center gap-[25px]">
      <slot />
    </div>

    <!-- Fades the photo into the white section below it. -->
    <div
      v-if="gradient"
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 h-[250px] bg-gradient-to-b from-transparent to-white"
    />
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  /** Basename of the optimised set, e.g. `/v2/hero-home` (see scripts/optimize-image.sh). */
  image: string
  heightClass?: string
  gradient?: boolean
}>(), {
  heightClass: 'h-[700px] lg:h-[793px]',
  gradient: true,
})
</script>
