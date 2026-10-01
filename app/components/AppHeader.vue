<template>
  <!-- Desktop: sits on the photo hero and stays pinned while the hero scrolls past.
       The design places it inside the hero frame, so it leaves the screen with it. -->
  <div class="pointer-events-none absolute inset-0 z-50 hidden lg:block">
    <div class="sticky top-0 flex h-header items-center">
      <div class="pointer-events-auto mx-auto flex w-full max-w-container items-center justify-between">
        <NuxtLink to="/">
          <span class="sr-only">GreenDee</span>
          <img src="/v2/logo-white.png" alt="GreenDee" class="h-[31px] w-[170px] object-contain" width="170" height="31">
        </NuxtLink>

        <nav class="flex items-center gap-10" aria-label="Hoofdnavigatie">
          <div class="relative" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
            <!-- Zelfde kolomstructuur als de andere navlinks, zodat de tekst op
                 dezelfde hoogte staat; de caret hangt ernaast, niet in de regel. -->
            <button
              type="button"
              class="flex items-center justify-center gap-1.5"
              :aria-expanded="dropdownOpen"
              aria-haspopup="true"
              @click="dropdownOpen = !dropdownOpen"
            >
              <span class="flex h-10 flex-col items-center justify-center gap-1 px-0.5 pb-[5px] pt-[11px] text-nav font-bold text-white">
                Diensten
                <span
                  class="h-0.5 rounded-sm bg-greendee-yellow transition-all duration-200"
                  :class="dienstenActief ? 'w-full opacity-100' : 'w-1 opacity-0'"
                />
              </span>
              <img src="/v2/caret-down.svg" alt="" class="h-3 w-3 transition-transform duration-200" :class="{ 'rotate-180': dropdownOpen }">
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              leave-active-class="transition duration-100 ease-in"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div v-if="dropdownOpen" class="absolute left-1/2 top-11 w-[284px] -translate-x-1/2">
                <div class="flex flex-col gap-2.5 rounded-dropdown border border-white/10 bg-greendee-green-deep/[0.94] p-2.5 backdrop-blur-[100px]">
                  <NuxtLink
                    v-for="item in diensten"
                    :key="item.href"
                    :to="item.href"
                    class="flex min-h-11 items-center rounded-dropdown-item border-l-[3px] px-3.5 py-3 text-base font-bold leading-snug text-white/90 transition-colors hover:bg-white/5"
                    :class="isActive(item.href) ? 'border-greendee-yellow' : 'border-transparent'"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink
            v-for="link in mainLinks"
            :key="link.href"
            :to="link.href"
            class="flex h-10 flex-col items-center justify-center gap-1 px-0.5 pb-[5px] pt-[11px] text-nav font-bold text-white"
          >
            {{ link.title }}
            <span
              class="h-0.5 rounded-sm bg-greendee-yellow transition-all duration-200"
              :class="isActive(link.href) ? 'w-full opacity-100' : 'w-1 opacity-0'"
            />
          </NuxtLink>
        </nav>

        <NuxtLink
          to="/contact"
          class="flex h-[42px] w-[183px] items-center justify-center rounded-full bg-greendee-yellow text-nav font-bold text-greendee-ink transition-opacity hover:opacity-90"
        >
          Neem contact op
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Mobile: logo + hamburger, 20px from each edge, 28px from the top. -->
  <div class="absolute inset-x-5 top-7 z-50 lg:hidden">
    <div class="flex items-start justify-between rounded-2xl p-2.5">
      <NuxtLink to="/" @click="mobileOpen = false">
        <span class="sr-only">GreenDee</span>
        <img src="/v2/logo-white.png" alt="GreenDee" class="h-6 w-[90px] object-contain" width="90" height="24">
      </NuxtLink>

      <button
        type="button"
        class="size-6"
        :aria-expanded="mobileOpen"
        aria-controls="mobiel-menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">{{ mobileOpen ? 'Menu sluiten' : 'Menu openen' }}</span>
        <img v-if="!mobileOpen" src="/v2/menu-hamburger.svg" alt="" class="size-6">
        <svg v-else class="size-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

  </div>

  <!-- Het open menu staat los van de hero: die heeft overflow-hidden en een
       vaste hoogte, waardoor de onderkant van het menu werd afgeknipt. Vandaar
       een teleport naar body met vaste positionering.
       Deze open staat zit niet in het ontwerp en volgt de desktopdropdown. -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileOpen"
        id="mobiel-menu"
        class="fixed inset-x-5 top-[76px] z-[55] flex max-h-[calc(100dvh-96px)] flex-col gap-1 overflow-y-auto rounded-dropdown border border-white/10 bg-greendee-green-deep/[0.94] p-2.5 backdrop-blur-[100px] lg:hidden"
        aria-label="Hoofdnavigatie"
      >
        <p class="px-3.5 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-white/40">Diensten</p>
        <NuxtLink
          v-for="item in diensten"
          :key="item.href"
          :to="item.href"
          class="flex min-h-11 items-center rounded-dropdown-item border-l-[3px] px-3.5 py-2 text-base font-bold leading-snug text-white/90"
          :class="isActive(item.href) ? 'border-greendee-yellow' : 'border-transparent'"
        >
          {{ item.title }}
        </NuxtLink>

        <div class="my-2 h-px bg-white/10" />

        <NuxtLink
          v-for="link in mainLinks"
          :key="link.href"
          :to="link.href"
          class="flex min-h-11 items-center rounded-dropdown-item border-l-[3px] px-3.5 py-2 text-base font-bold leading-snug text-white/90"
          :class="isActive(link.href) ? 'border-greendee-yellow' : 'border-transparent'"
        >
          {{ link.title }}
        </NuxtLink>

        <NuxtLink to="/contact" class="mt-2 flex h-[42px] shrink-0 items-center justify-center rounded-full bg-greendee-yellow text-nav font-bold text-greendee-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
          Neem contact op
        </NuxtLink>
      </nav>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const dropdownOpen = ref(false)
const mobileOpen = ref(false)

const diensten = [
  { title: 'Offertetrajecten', href: '/offertetrajecten' },
  { title: 'Energiesimulaties', href: '/energiesimulaties' },
  { title: 'Business Cases', href: '/business-cases' },
  { title: 'Energiecontracten', href: '/energiecontracten' },
  { title: 'Monitoring en rendementsbewaking', href: '/monitoring' },
  { title: 'Energyhubs', href: '/energyhubs' },
]

const mainLinks = [
  { title: 'Projecten', href: '/projecten' },
  { title: 'Over ons', href: '/over-ons' },
  { title: 'Nieuws', href: '/nieuws' },
]

const route = useRoute()

function isActive(href: string) {
  return route.path === href || route.path.startsWith(`${href}/`)
}

// Onderstreep "Diensten" zodra je op een van de dienstenpagina's staat.
const dienstenActief = computed(() => diensten.some(item => isActive(item.href)))

watch(() => route.fullPath, () => {
  dropdownOpen.value = false
  mobileOpen.value = false
})

// Zet de pagina erachter vast zolang het menu open is.
watch(mobileOpen, (open) => {
  if (import.meta.server) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.server) return
  document.body.style.overflow = ''
})
</script>
