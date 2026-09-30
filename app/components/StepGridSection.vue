<template>
  <section
    class="flex flex-col items-center justify-center gap-12 px-5 py-16 lg:px-0 lg:py-[88px]"
    :class="background === 'grey' ? 'bg-[#f3f3f3]' : 'bg-[#ecf4eb]'"
  >
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

    <ol class="grid w-full max-w-container gap-6 lg:grid-cols-2">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        class="flex flex-col items-start gap-3 overflow-hidden rounded-2xl border-[1.5px] border-gray-200 bg-white p-6 lg:min-h-[199px] lg:p-8"
      >
        <p class="font-bold text-greendee-green">
          <span class="text-[20px]">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="text-[14px] font-medium text-gray-500">&nbsp;&nbsp;·&nbsp;&nbsp;{{ step.duration }}</span>
        </p>
        <h3 class="w-full text-[20px] font-bold text-greendee-ink">{{ step.title }}</h3>
        <p class="w-full text-[14px] font-medium leading-[21px] text-gray-500">{{ step.body }}</p>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow: string
  title: string
  intro: string
  steps: { title: string, duration: string, body: string }[]
  background?: 'mint' | 'grey'
}>(), { background: 'mint' })
</script>
