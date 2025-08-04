<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation - Transparent on homepage, white on other pages -->
    <header :class="isHomePage ? 'absolute inset-x-0 top-0 z-50' : 'bg-white shadow-sm relative z-50'">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">GreenDee</span>
            <img 
              :src="isHomePage ? '/logo-secondary.png' : '/logo-primary.png'" 
              alt="GreenDee" 
              class="h-10 w-auto"
            >
          </NuxtLink>
        </div>
        
        <div class="flex lg:hidden">
          <button 
            type="button" 
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            :class="isHomePage ? 'text-gray-300' : 'text-gray-700'"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open hoofdmenu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink 
            to="/" 
            class="text-sm font-semibold leading-6 transition-colors"
            :class="isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-greendee-green'"
          >
            Home
          </NuxtLink>
          <a 
            :href="isHomePage ? '#diensten' : '/#diensten'" 
            class="text-sm font-semibold leading-6 transition-colors"
            :class="isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-greendee-green'"
          >
            Diensten
          </a>
          <a 
            :href="isHomePage ? '#contact' : '/#contact'" 
            class="text-sm font-semibold leading-6 transition-colors"
            :class="isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-greendee-green'"
          >
            Contact
          </a>
        </div>
        
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a 
            href="tel:0634466611" 
            class="text-sm font-semibold leading-6 transition-colors"
            :class="isHomePage ? 'text-white hover:text-gray-300' : 'text-greendee-green hover:text-green-700'"
          >
            Bel: 06-34466611 <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      
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
                  <NuxtLink 
                    to="/" 
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    @click="mobileMenuOpen = false"
                  >
                    Home
                  </NuxtLink>
                  <a 
                    :href="isHomePage ? '#diensten' : '/#diensten'" 
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    @click="mobileMenuOpen = false"
                  >
                    Diensten
                  </a>
                  <a 
                    :href="isHomePage ? '#contact' : '/#contact'" 
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    @click="mobileMenuOpen = false"
                  >
                    Contact
                  </a>
                </div>
                <div class="py-6">
                  <a 
                    href="tel:0634466611" 
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-greendee-green hover:bg-gray-50"
                  >
                    Bel: 06-34466611
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Main content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Company info -->
          <div>
            <img src="/logo-secondary.png" alt="GreenDee" class="h-10 w-auto mb-4">
            <p class="text-gray-400 text-sm">
              GreenDee helpt Nederland een stap verder in de energietransitie.
            </p>
          </div>
          
          <!-- Quick links -->
          <div>
            <h3 class="font-semibold mb-4">Snel naar</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
              </li>
              <li>
                <a href="/#diensten" class="hover:text-white transition-colors">Diensten</a>
              </li>
              <li>
                <a href="/#contact" class="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <!-- Contact info -->
          <div>
            <h3 class="font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="tel:0634466611" class="hover:text-white transition-colors">
                  06-34466611
                </a>
              </li>
              <li>
                <a href="mailto:lars@greendee.nl" class="hover:text-white transition-colors">
                  lars@greendee.nl
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/larsvandee/" target="_blank" rel="noopener noreferrer" 
                   class="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 GreenDee. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const route = useRoute()

const isHomePage = computed(() => route.path === '/')
</script>