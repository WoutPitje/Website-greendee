<template>
  <section
    class="flex flex-col items-center justify-center gap-8 px-5 lg:px-0"
    :class="[backgrounds[background], roundedTop ? 'overflow-hidden rounded-t-[32px]' : '', spacing]"
  >
    <div class="flex w-full flex-col items-center gap-4 text-center lg:w-[700px]">
      <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
        {{ title }}
      </h2>
      <p
        class="w-full font-medium text-black/85"
        :class="bodySize === 'base' ? 'text-[15px] leading-6 lg:text-[16px] lg:leading-6' : 'text-[15px] leading-6 lg:text-body'"
      >
        {{ body }}
      </p>
    </div>

    <NuxtLink
      :to="ctaTo"
      class="flex items-center justify-center rounded-full bg-greendee-yellow px-6 py-3.5 font-bold leading-[22px] text-greendee-ink"
      :class="ctaSize === 'lg' ? 'text-[16px] lg:px-5 lg:py-4 lg:text-body' : 'text-[16px] lg:px-5 lg:py-3'"
    >
      {{ ctaLabel }}
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
// Every page closes with this block, but the design gives each one its own
// background, spacing and whether the top edge is rounded.
const props = withDefaults(defineProps<{
  title: string
  body: string
  ctaLabel?: string
  ctaTo?: string
  background?: 'grey' | 'white' | 'mint'
  roundedTop?: boolean
  bodySize?: 'lg' | 'base'
  ctaSize?: 'lg' | 'base'
  /** Vertical padding: the design uses 64px everywhere except Vacatures (80px). */
  spacious?: boolean
}>(), {
  ctaLabel: 'Plan een gesprek in',
  ctaTo: '/contact',
  background: 'grey',
  roundedTop: true,
  bodySize: 'lg',
  ctaSize: 'base',
  spacious: false,
})

const backgrounds = {
  grey: 'bg-[#f3f3f3]',
  white: 'bg-white',
  mint: 'bg-[#ecf4eb]',
}

const spacing = computed(() => (props.spacious ? 'py-14 lg:py-20' : 'py-14 lg:py-16'))
</script>
