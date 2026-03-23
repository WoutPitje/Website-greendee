<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

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
            <h3 class="font-semibold mb-4">Energieoplossingen</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <NuxtLink to="/gebiedsontwikkeling" class="hover:text-white transition-colors">Gebiedsontwikkeling</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/netcongestie" class="hover:text-white transition-colors">Netcongestie</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/rendement" class="hover:text-white transition-colors">Beter rendement</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/referenties" class="hover:text-white transition-colors">Referenties</NuxtLink>
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
</script>