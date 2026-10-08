<template>
  <div>
    <!-- Het artikeldetail staat niet in het v2-ontwerp; deze opmaak volgt de
         typografie en kleuren van de rest van de site. -->
    <article v-if="article">
      <header class="relative flex h-[420px] items-end overflow-hidden lg:h-[520px]">
        <div class="absolute inset-0 bg-greendee-ink">
          <img v-if="article.image" :src="article.image" alt="" class="size-full object-cover opacity-70">
        </div>
        <div
          aria-hidden="true"
          class="absolute inset-0"
          style="background-image: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.75) 100%)"
        />

        <AppHeader />

        <div class="relative mx-auto flex w-full max-w-container flex-col items-start gap-4 px-5 pb-12 lg:px-0">
          <div class="flex items-center gap-2.5">
            <span class="rounded-full bg-greendee-yellow px-3 py-1.5 text-[12px] font-bold leading-4 text-[#412402]">
              {{ article.category }}
            </span>
            <span class="text-[13px] font-medium text-white/80">{{ article.readingMinutes }} min. leestijd</span>
            <time v-if="article.publishedDate" class="text-[13px] font-medium text-white/80" :datetime="article.publishedDate">
              {{ formatDate(article.publishedDate) }}
            </time>
          </div>
          <h1 class="w-full text-[30px] font-extrabold leading-[38px] text-white text-shadow-hero-mobile lg:w-[820px] lg:text-[42px] lg:leading-[52px]">
            {{ article.title }}
          </h1>
        </div>
      </header>

      <div class="mx-auto flex max-w-[760px] flex-col gap-6 px-5 py-16 lg:px-0 lg:py-24">
        <p class="text-[18px] font-medium leading-8 text-greendee-ink">{{ article.summary }}</p>
        <div class="prose-greendee" v-html="body" />
        <NuxtLink to="/nieuws" class="mt-4 text-[15px] font-bold text-greendee-green">
          ← Terug naar alle artikelen
        </NuxtLink>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

interface StrapiArticleDetail {
  title?: string
  summary?: string
  category?: string
  body?: string
  publishedDate?: string
  author?: string
  heroImage?: { url?: string } | null
}

const { data: article } = await useAsyncData(`article-${slug}`, async () => {
  const res = await $fetch<{ data?: StrapiArticleDetail[] }>('/cms/api/articles', {
    query: { populate: 'heroImage', 'filters[slug][$eq]': slug },
  })

  const entry = res?.data?.[0]
  if (!entry) return null

  const url = entry.heroImage?.url ?? ''
  const words = (entry.body ?? '').trim().split(/\s+/).filter(Boolean).length

  return {
    title: entry.title ?? '',
    summary: entry.summary ?? '',
    category: entry.category ?? '',
    body: entry.body ?? '',
    publishedDate: entry.publishedDate ?? '',
    author: entry.author ?? 'GreenDee',
    image: url.startsWith('/') ? `/cms${url}` : url,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  }
})

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artikel niet gevonden', fatal: true })
}

// Strapi's richtext field is markdown; only the handful of constructs the editor
// produces are turned into HTML, and every angle bracket is escaped first so a
// pasted fragment cannot inject markup.
// Markdown-links binnen een regel. De tekst is hier al ge-escaped, dus dit
// voegt alleen een anker toe. Alleen http(s) en interne paden worden klikbaar:
// een javascript:- of data:-URL uit het CMS mag nooit uitgevoerd worden.
function inline(tekst: string) {
  return tekst.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_heel, label, url) => {
    const extern = /^https?:\/\//i.test(url)
    if (!extern && !url.startsWith('/')) return label
    const attrs = extern ? ' target="_blank" rel="noopener noreferrer"' : ''
    return `<a href="${url}"${attrs}>${label}</a>`
  })
}

const body = computed(() => {
  const escaped = (article.value?.body ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

  return escaped
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim()
      if (!trimmed) return ''
      if (trimmed.startsWith('### ')) return `<h3>${inline(trimmed.slice(4))}</h3>`
      if (trimmed.startsWith('## ')) return `<h2>${inline(trimmed.slice(3))}</h2>`
      if (trimmed.startsWith('# ')) return `<h2>${inline(trimmed.slice(2))}</h2>`
      if (/^[-*] /.test(trimmed)) {
        const items = trimmed.split('\n').map(line => `<li>${inline(line.replace(/^[-*] /, ''))}</li>`).join('')
        return `<ul>${items}</ul>`
      }
      // Pipe-tabel: kopregel, scheidingsregel, daarna de rijen.
      if (/^\|/.test(trimmed) && trimmed.includes('\n')) {
        const regels = trimmed.split('\n').filter(r => r.trim().startsWith('|'))
        const cellen = (r: string) => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim())
        const [kop, scheiding, ...rest] = regels
        if (scheiding && /^[\s|:-]+$/.test(scheiding)) {
          const th = cellen(kop).map(c => `<th>${inline(c)}</th>`).join('')
          const tr = rest.map(r => `<tr>${cellen(r).map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')
          return `<div class="tabel-scroll"><table><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table></div>`
        }
      }
      return `<p>${inline(trimmed.replaceAll('\n', '<br>'))}</p>`
    })
    .join('')
})

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
}

const { canonical, afbeelding } = useSeo(() => ({
  titel: article.value?.title ?? 'Artikel',
  beschrijving: article.value?.summary ?? '',
  // De foto staat in het CMS en wordt via /cms geserveerd; valt terug op het
  // standaardbeeld als een bericht nog geen foto heeft.
  afbeelding: article.value?.image || undefined,
  type: 'article',
  gepubliceerd: article.value?.publishedDate || undefined,
  auteur: article.value?.author,
}))

// Gestructureerde gegevens, zodat een zoekmachine het bericht als artikel
// herkent in plaats van als willekeurige pagina.
useHead(() => ({
  script: article.value
    ? [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.value.title,
          description: article.value.summary,
          image: afbeelding.value,
          datePublished: article.value.publishedDate,
          author: { '@type': 'Person', name: article.value.author },
          publisher: { '@type': 'Organization', name: 'GreenDee' },
          mainEntityOfPage: canonical.value,
          articleSection: article.value.category,
        }),
      }]
    : [],
}))
</script>

<style scoped>
.prose-greendee :deep(h2) {
  @apply mt-8 text-[24px] font-bold leading-8 text-greendee-ink;
}
.prose-greendee :deep(h3) {
  @apply mt-6 text-[19px] font-bold leading-7 text-greendee-ink;
}
.prose-greendee :deep(p) {
  @apply mt-4 text-[17px] font-medium leading-8 text-gray-600;
}
.prose-greendee :deep(ul) {
  @apply mt-4 list-disc space-y-2 pl-6 text-[17px] font-medium leading-8 text-gray-600;
}
/* Tabellen mogen breder zijn dan de tekstkolom en scrollen dan apart, zodat
   de pagina zelf nooit horizontaal meegaat. */
.prose-greendee :deep(a) {
  @apply font-semibold text-greendee-green underline underline-offset-2 transition-opacity hover:opacity-70;
}
.prose-greendee :deep(.tabel-scroll) {
  @apply mt-6 overflow-x-auto;
}
.prose-greendee :deep(table) {
  @apply w-full min-w-[520px] border-collapse text-left text-[15px];
}
.prose-greendee :deep(th) {
  @apply border-b-2 border-greendee-green/30 py-3 pr-5 align-top font-bold text-greendee-ink;
}
.prose-greendee :deep(td) {
  @apply border-b border-gray-200 py-3 pr-5 align-top font-medium leading-6 text-gray-600;
}
</style>
