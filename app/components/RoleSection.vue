<template>
  <section
    class="flex flex-col items-center justify-center px-5 py-16 lg:px-0 lg:py-[100px]"
    :class="background === 'grey' ? 'bg-[#f3f3f3]' : 'bg-white'"
  >
    <div
      class="flex w-full max-w-container flex-col items-center gap-10 lg:gap-20"
      :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <div class="h-[280px] w-full shrink-0 overflow-hidden rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:h-[400px] lg:w-[536px]">
        <picture>
          <source :srcset="`${image}-1280.webp 1280w, ${image}-2400.webp 2400w`" type="image/webp">
          <img
            :src="`${image}-1280.jpg`"
            :alt="imageAlt"
            class="size-full object-cover"
            width="536"
            height="400"
          >
        </picture>
      </div>

      <div class="flex w-full flex-col items-start gap-6 lg:w-[536px]">
        <p class="text-[15px] font-bold leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
          {{ eyebrow }}
        </p>
        <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
          {{ title }}
        </h2>
        <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-body lg:tracking-[-0.36px] lg:text-black">
          {{ body }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  body: string
  image: string
  imageAlt?: string
  eyebrow?: string
  /** Puts the photo on the right instead of the left. */
  reverse?: boolean
  background?: 'white' | 'grey'
}>(), {
  eyebrow: 'De rol van GreenDee',
  imageAlt: '',
  reverse: false,
  background: 'white',
})
</script>
