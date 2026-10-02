<template>
  <NuxtLink
    :to="`/nieuws/${article.slug}`"
    class="group flex h-[460px] min-w-0 grow basis-[330px] flex-col items-start overflow-hidden rounded-[20px] border-[1.5px] border-gray-200 bg-white transition-colors hover:border-greendee-green"
  >
    <div class="h-[200px] w-full shrink-0 bg-[#d9dde3]">
      <img v-if="article.image" :src="article.image" :alt="article.title" class="size-full object-cover">
    </div>

    <div class="flex flex-1 flex-col items-start justify-between p-6">
      <div class="flex items-center gap-2.5">
        <span class="rounded-full bg-greendee-yellow px-3 py-1.5 text-[12px] font-bold leading-4 text-[#412402] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
          {{ article.category }}
        </span>
        <span class="text-[13px] font-medium leading-[18px] text-gray-500">
          {{ article.readingMinutes }} min lezen
        </span>
      </div>

      <p class="w-full text-[19px] font-bold leading-[26px] text-greendee-ink">{{ article.title }}</p>
      <p class="line-clamp-3 w-full text-[15px] font-medium leading-6 text-gray-600">{{ article.summary }}</p>

      <span class="flex items-center gap-2 text-[15px] font-bold leading-5 text-greendee-green">
        Lees het artikel
        <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Article } from '~/composables/useArticles'

defineProps<{ article: Article }>()
</script>
