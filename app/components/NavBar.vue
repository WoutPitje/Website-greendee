<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="px-4 py-4 lg:px-8 max-w-7xl mx-auto">
      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center justify-between bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg" aria-label="Global">
        <!-- Logo -->
        <NuxtLink to="/" class="pl-2">
          <span class="sr-only">GreenDee</span>
          <img
            src="/logo-primary.png"
            alt="GreenDee"
            class="h-8 w-auto translate-y-0.5"
          >
        </NuxtLink>

        <!-- Nav links -->
        <div class="flex gap-x-8">
          <!-- Energieoplossingen dropdown -->
          <div class="relative" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
            <button
              type="button"
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-700 hover:text-greendee-green transition-colors"
            >
              Energieoplossingen
              <svg class="h-4 w-4 transition-transform" :class="{ 'rotate-180': dropdownOpen }" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div v-if="dropdownOpen" class="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                <div class="rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 overflow-hidden">
                  <NuxtLink
                    v-for="item in diensten"
                    :key="item.href"
                    :to="item.href"
                    class="flex items-start gap-x-3 p-4 hover:bg-gray-50 transition-colors"
                    @click="dropdownOpen = false"
                  >
                    <div class="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-greendee-green/10 mt-0.5">
                      <img :src="item.icon" :alt="item.title" class="h-5 w-5 object-contain">
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-gray-900">{{ item.title }}</p>
                      <p class="mt-0.5 text-xs text-gray-500 leading-snug">{{ item.subtitle }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink
            to="/referenties"
            class="text-sm font-semibold leading-6 text-gray-700 hover:text-greendee-green transition-colors"
          >
            Projecten
          </NuxtLink>
          <NuxtLink
            to="/#over-ons"
            class="text-sm font-semibold leading-6 text-gray-700 hover:text-greendee-green transition-colors"
          >
            Over ons
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="text-sm font-semibold leading-6 text-gray-700 hover:text-greendee-green transition-colors"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- CTA button -->
        <a
          href="mailto:lars@greendee.nl?subject=Adviesaanvraag"
          class="rounded-full bg-greendee-green px-5 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
        >
          Direct advies
        </a>
      </nav>

      <!-- Mobile nav -->
      <div class="flex lg:hidden items-center justify-between bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        <NuxtLink to="/" class="p-1.5">
          <span class="sr-only">GreenDee</span>
          <img
            src="/logo-primary.png"
            alt="GreenDee"
            class="h-7 w-auto"
          >
        </NuxtLink>
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open hoofdmenu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-50">
        <div class="fixed inset-0 bg-black/20" @click="mobileMenuOpen = false" />
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
              <span class="sr-only">GreenDee</span>
              <img class="h-8 w-auto" src="/logo-primary.png" alt="GreenDee">
            </NuxtLink>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Sluit menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <!-- Energieoplossingen expandable -->
                <div>
                  <button
                    type="button"
                    class="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    @click="mobileDropdownOpen = !mobileDropdownOpen"
                  >
                    Energieoplossingen
                    <svg class="h-5 w-5 flex-none transition-transform" :class="{ 'rotate-180': mobileDropdownOpen }" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div v-if="mobileDropdownOpen" class="mt-1 space-y-1 pl-4">
                    <NuxtLink
                      v-for="item in diensten"
                      :key="item.href"
                      :to="item.href"
                      class="block rounded-lg py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-greendee-green"
                      @click="mobileMenuOpen = false"
                    >
                      {{ item.title }}
                    </NuxtLink>
                  </div>
                </div>

                <NuxtLink
                  to="/referenties"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="mobileMenuOpen = false"
                >
                  Projecten
                </NuxtLink>
                <NuxtLink
                  to="/#over-ons"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="mobileMenuOpen = false"
                >
                  Over ons
                </NuxtLink>
                <NuxtLink
                  to="/#contact"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="mobileMenuOpen = false"
                >
                  Contact
                </NuxtLink>
              </div>
              <div class="py-6">
                <a
                  href="mailto:lars@greendee.nl?subject=Adviesaanvraag"
                  class="block rounded-lg bg-greendee-green px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-green-700"
                >
                  Direct advies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)
const mobileDropdownOpen = ref(false)

const diensten = [
  {
    title: 'Netbewuste Gebiedsontwikkeling',
    subtitle: 'Energie, grondposities en infrastructuur',
    icon: '/icon-gebiedsontwikkeling.png',
    href: '/gebiedsontwikkeling',
  },
  {
    title: 'Netcongestie',
    subtitle: 'Structurele oplossing voor uw bedrijf',
    icon: '/icon-netcongestie.png',
    href: '/netcongestie',
  },
  {
    title: 'Beter rendement',
    subtitle: 'Duurzame opwek weer rendabel',
    icon: '/icon-rendement.png',
    href: '/rendement',
  },
]
</script>
