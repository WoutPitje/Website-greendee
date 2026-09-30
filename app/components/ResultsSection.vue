<template>
  <section
    class="flex flex-col items-center justify-center gap-9 bg-white px-5 py-16 lg:px-36 lg:py-[100px]"
    :class="roundedTop ? 'overflow-hidden rounded-t-[32px]' : ''"
  >
    <div class="flex w-full max-w-container flex-col items-start gap-3">
      <p class="text-[15px] font-bold leading-6 text-greendee-green">{{ eyebrow }}</p>
      <h2 class="w-full text-[28px] font-extrabold leading-[36px] text-greendee-ink lg:w-[760px] lg:text-[38px] lg:leading-[48px]">
        {{ title }} <span class="italic text-[#024100]">{{ titleAccent }}</span>
      </h2>
    </div>

    <dl class="flex w-full max-w-container flex-col items-start">
      <div
        v-for="row in rows"
        :key="row.term"
        class="flex w-full flex-col gap-1 border-t border-gray-200 py-5 text-[17px] lg:flex-row lg:gap-8"
      >
        <dt class="font-bold leading-[26px] text-greendee-green lg:w-[200px] lg:shrink-0">
          {{ row.term }}
        </dt>
        <dd class="flex-1 font-medium leading-[27px] text-gray-600">{{ row.description }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  /** Rendered in green italic, as the second half of the heading. */
  titleAccent: string
  rows: { term: string, description: string }[]
  roundedTop?: boolean
}>(), {
  eyebrow: 'Resultaten',
  roundedTop: false,
})
</script>
