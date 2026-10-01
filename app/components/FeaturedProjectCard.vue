<template>
  <button
    type="button"
    class="group flex w-full flex-col items-start overflow-hidden rounded-[20px] border-[1.5px] border-gray-200 bg-white text-left transition-all hover:border-2 hover:border-greendee-green hover:shadow-[0px_8px_24px_0px_rgba(15,101,12,0.12)] lg:w-[564px]"
    @click="$emit('open', reference)"
  >
    <div class="h-[280px] w-full shrink-0 bg-gray-100">
      <img
        v-if="reference.image"
        :src="reference.image"
        :alt="reference.title"
        class="size-full"
        :class="reference.imageIsLogo ? 'object-contain p-8' : 'object-cover'"
      >
    </div>

    <div class="flex flex-1 flex-col items-start gap-3.5 p-6 lg:p-7">
      <div class="flex flex-wrap items-start gap-2">
        <span v-if="reference.category" class="rounded-full bg-greendee-yellow px-3 py-1.5 text-[12px] font-bold text-[#412402] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
          {{ reference.category }}
        </span>
        <span v-if="reference.capacity" class="rounded-full bg-[#ecf4eb] px-3 py-1.5 text-[12px] font-bold text-greendee-green">
          ↑ {{ reference.capacity }}
        </span>
      </div>

      <h3 class="w-full text-[22px] font-bold text-greendee-ink lg:text-h3">{{ reference.title }}</h3>
      <p class="text-[14px] font-medium text-gray-500">📍 {{ reference.location }}</p>
      <p class="line-clamp-3 w-full text-[15px] font-medium leading-6 text-gray-600">
        {{ reference.description }}
      </p>

      <span class="mt-auto flex items-center gap-2 text-[15px] font-bold text-greendee-green">
        Bekijk project
        <span aria-hidden="true" class="transition-transform duration-150 group-hover:translate-x-1">→</span>
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { Reference } from '~/composables/useReferences'

defineProps<{ reference: Reference }>()
defineEmits<{ open: [reference: Reference] }>()
</script>
