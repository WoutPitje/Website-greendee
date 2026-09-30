<template>
  <section class="flex flex-col items-center justify-center gap-12 bg-[#f3f3f3] px-5 py-16 lg:px-36 lg:py-[100px]">
    <div class="flex w-full flex-col items-center gap-2 text-center lg:w-[760px]">
      <p class="text-[15px] font-bold leading-6 text-greendee-green">{{ eyebrow }}</p>
      <h2 class="w-full text-[28px] font-extrabold leading-[36px] text-greendee-ink lg:text-h2 lg:leading-[44px]">
        {{ title }}
      </h2>
    </div>

    <div class="relative w-full max-w-container">
      <!-- Progress rail behind the numbers; the filled part marks how far the
           reader has scrolled through the steps. -->
      <div aria-hidden="true" class="absolute left-0 top-[22px] hidden h-0.5 w-full bg-[#cfd8cd] lg:block">
        <div class="h-full bg-greendee-green" :style="{ width: `${filled}%` }" />
      </div>

      <ol class="flex flex-col gap-8 lg:flex-row lg:gap-6">
        <li v-for="(step, index) in steps" :key="step.title" class="relative flex flex-1 flex-col items-start gap-2.5">
          <span
            class="bg-[#f3f3f3] pr-3.5 text-[38px] font-extrabold leading-[46px] tracking-[-1.2px]"
            :class="index < activeCount ? 'text-greendee-green' : 'text-[#b9c7b5]'"
          >
            {{ index + 1 }}
          </span>
          <p class="w-full text-[16px] font-bold leading-[23px] text-greendee-ink">{{ step.title }}</p>
          <p class="w-full text-[13.5px] font-medium leading-[21px] text-gray-600">{{ step.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  eyebrow: string
  title: string
  steps: { title: string, body: string }[]
}>()

// The design shows the first two steps as completed. Rather than hardcode that,
// the rail fills as the section scrolls through the viewport.
const activeCount = ref(2)
const filled = computed(() => (activeCount.value / props.steps.length) * 100)
</script>
