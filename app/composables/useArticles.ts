// News and knowledge-base articles come from Strapi through the /cms proxy.

export interface Article {
  id: string
  slug: string
  title: string
  summary: string
  category: string
  image: string
  publishedDate: string
  /** Estimated minutes, derived from the body since Strapi has no such field. */
  readingMinutes: number
  featured: boolean
}

interface StrapiArticle {
  documentId?: string
  slug?: string
  title?: string
  summary?: string
  category?: string
  body?: string
  publishedDate?: string
  featured?: boolean
  heroImage?: { url?: string } | null
}

// 200 words a minute is the usual rule of thumb for Dutch prose.
function estimateReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function toArticle(entry: StrapiArticle): Article {
  const url = entry.heroImage?.url ?? ''

  return {
    id: entry.documentId || entry.slug || '',
    slug: entry.slug ?? '',
    title: entry.title ?? '',
    summary: entry.summary ?? '',
    category: entry.category ?? '',
    image: url.startsWith('/') ? `/cms${url}` : url,
    publishedDate: entry.publishedDate ?? '',
    readingMinutes: estimateReadingMinutes(entry.body ?? ''),
    featured: Boolean(entry.featured),
  }
}

export function useArticles() {
  return useAsyncData<Article[]>(
    'articles',
    async () => {
      try {
        const res = await $fetch<{ data?: StrapiArticle[] }>('/cms/api/articles', {
          query: {
            populate: 'heroImage',
            'pagination[pageSize]': 100,
            'sort[0]': 'publishedDate:desc',
          },
        })

        return (res?.data ?? []).map(toArticle)
      }
      catch {
        // Strapi not reachable, or the collection has not been deployed yet.
        return []
      }
    },
    { default: () => [] },
  )
}
