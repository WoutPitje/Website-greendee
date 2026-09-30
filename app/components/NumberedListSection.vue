<template>
  <section class="flex flex-col items-center justify-center bg-white px-5 py-16 lg:px-0 lg:py-[100px]">
    <div class="flex w-full max-w-container flex-col items-start gap-10 py-[50px] lg:flex-row lg:gap-24">
      <div class="flex flex-col items-start gap-5 lg:w-[420px] lg:shrink-0">
        <p class="text-[15px] font-bold leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
          {{ eyebrow }}
        </p>
        <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2">
          {{ title }}
        </h2>
        <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-body lg:tracking-[-0.36px]">
          {{ intro }}
        </p>
      </div>

      <ol class="flex w-full flex-col items-start lg:w-[536px]">
        <li
          v-for="(item, index) in items"
          :key="item.title"
          class="flex w-full items-start gap-5 py-6"
          :class="index > 0 ? 'border-t border-gray-200' : ''"
        >
          <span class="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-greendee-green text-[14px] font-bold text-white">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <div class="flex flex-1 flex-col items-start gap-1">
            <p class="w-full text-[18px] font-bold text-black">{{ item.title }}</p>
            <p class="w-full text-[14px] font-medium leading-5 text-gray-600">{{ item.body }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  intro: string
  items: { title: string, body: string }[]
}>()
</script>
