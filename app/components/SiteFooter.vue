<template>
  <footer class="bg-greendee-green-darkest py-24">
    <div class="mx-auto flex max-w-container flex-col gap-[34px] px-6 lg:px-0">
      <!-- Logo + copyright -->
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <img src="/v2/logo-white.png" alt="GreenDee" class="h-[49px] w-auto" width="269" height="49">
        <p class="text-body font-medium text-white">
          &copy; {{ new Date().getFullYear() }} GreenDee. Alle rechten voorbehouden.
        </p>
      </div>

      <div class="h-px w-full bg-white/20" />

      <!-- Link columns -->
      <div class="flex flex-col gap-10 sm:flex-row sm:gap-6">
        <div v-for="column in columns" :key="column.title" class="flex flex-col gap-6 sm:w-[270px] sm:last:w-auto sm:last:flex-1">
          <p class="text-body font-medium text-white">{{ column.title }}</p>
          <template v-for="link in column.links" :key="link.label">
            <a
              v-if="link.external"
              :href="link.href"
              :target="link.target"
              :rel="link.target ? 'noopener noreferrer' : undefined"
              class="text-body font-medium text-white underline underline-offset-2 opacity-50 transition-opacity hover:opacity-100"
            >
              {{ link.label }}
            </a>
            <NuxtLink
              v-else
              :to="link.href"
              class="text-body font-medium text-white underline underline-offset-2 opacity-50 transition-opacity hover:opacity-100"
            >
              {{ link.label }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface FooterLink {
  label: string
  href: string
  // Anything leaving the site (mailto, tel, LinkedIn) renders as a plain <a>;
  // internal routes go through NuxtLink so they stay client-side navigations.
  external?: boolean
  target?: string
}

const columns: { title: string, links: FooterLink[] }[] = [
  {
    title: 'Navigatie',
    links: [
      { label: 'Diensten', href: '/offertetrajecten' },
      { label: 'Projecten', href: '/projecten' },
      { label: 'Over ons', href: '/over-ons' },
    ],
  },
  {
    title: 'Meer',
    links: [
      { label: 'Nieuws', href: '/nieuws' },
      { label: 'Vacatures', href: '/vacatures' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Telefoonnummer: 06-34466611', href: 'tel:+31634466611', external: true },
      // The v2 feedback replaced Lars' personal address with the shared inbox.
      { label: 'E-mailadres: offerte@greendee.nl', href: 'mailto:offerte@greendee.nl', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/larsvandee/', external: true, target: '_blank' },
    ],
  },
]
</script>
