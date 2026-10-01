<template>
  <NuxtLink
    :to="`/projecten#${reference.id}`"
    class="relative block h-[420px] w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white"
  >
    <img
      v-if="reference.image"
      :src="reference.image"
      :alt="reference.title"
      class="absolute inset-0 size-full object-cover"
      :class="reference.imageIsLogo ? 'bg-white object-contain p-6' : ''"
    >

    <div
      aria-hidden="true"
      class="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent via-black/10 to-black/50"
    />

    <div class="absolute inset-x-5 bottom-5 flex flex-col items-start gap-[7px]">
      <div v-if="reference.capacity" class="flex h-6 items-center rounded-[10px] bg-white/[0.18] px-[7px]">
        <span class="text-[11px] font-bold text-white">↑ {{ reference.capacity }}</span>
      </div>

      <p class="w-full text-[20px] font-bold text-white">{{ reference.title }}</p>
      <p class="w-full text-[13px] font-medium text-white/80">📍 {{ reference.location }}</p>

      <div class="flex w-full flex-col items-start gap-5">
        <p class="line-clamp-3 w-full text-[13px] font-medium text-white/90">
          {{ reference.description }}
        </p>
        <span class="flex items-center gap-1.5 text-[14px] font-bold text-white">
          Bekijk project
          <span aria-hidden="true" class="transition-transform duration-150 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </div>

    <div
      v-if="reference.category"
      class="absolute right-5 top-5 flex h-7 items-center justify-center rounded-xl bg-greendee-yellow px-3 py-[5px]"
    >
      <span class="text-[12px] font-bold text-[#412402]">{{ reference.category }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Reference } from '~/composables/useReferences'

defineProps<{ reference: Reference }>()
</script>
