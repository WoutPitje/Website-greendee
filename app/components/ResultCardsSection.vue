<template>
  <section class="flex flex-col items-center justify-center gap-12 overflow-hidden rounded-t-[32px] bg-white px-5 py-16 lg:px-0 lg:py-[88px]">
    <div class="flex w-full flex-col items-center gap-[5px] text-center lg:w-[760px]">
      <p class="text-[15px] font-bold leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
        {{ eyebrow }}
      </p>
      <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
        {{ title }}
      </h2>
      <p class="w-full text-[15px] font-medium leading-6 text-black lg:text-body lg:tracking-[-0.36px]">
        {{ intro }}
      </p>
    </div>

    <div class="flex w-full max-w-container flex-col gap-6 lg:flex-row">
      <div
        v-for="card in cards"
        :key="card.title"
        class="flex flex-1 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-[1.5px] border-greendee-green/25 bg-white px-6 py-10 text-center"
      >
        <p class="text-[28px] font-bold text-greendee-green">{{ card.title }}</p>
        <p class="w-full text-[14px] font-medium text-gray-500">{{ card.body }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  intro: string
  cards: { title: string, body: string }[]
}>()
</script>
