<template>
  <section class="bg-gray-900">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-[85vh] sm:h-[90vh]">
      <!-- Left: Large image -->
      <div class="relative overflow-hidden">
        <img
          src="/hero-1.png"
          alt="Windmolens en zonnepanelen op een veld"
          class="absolute inset-0 w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div class="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
          <div class="inline-block bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-lg max-w-lg">
            <p class="text-gray-900 text-sm sm:text-base font-medium italic">
              "Ons bedrijventerrein wil energie delen, maar waar begin ik?"
            </p>
          </div>
        </div>
      </div>

      <!-- Right: Two stacked images -->
      <div class="flex flex-col">
        <!-- Top right image -->
        <div class="relative overflow-hidden flex-1 min-h-0">
          <img
            src="/hero-2.png"
            alt="Elektriciteitsnetwerk transformatorstation"
            class="absolute inset-0 w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <div class="inline-block bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-lg">
              <p class="text-gray-900 text-sm sm:text-base font-medium italic">
                "Mijn bedrijf kan niet uitbreiden door netcongestie."
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom right image -->
        <div class="relative overflow-hidden flex-1 min-h-0">
          <img
            src="/hero-3.png"
            alt="Zonnepanelen op bedrijfsdaken"
            class="absolute inset-0 w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <div class="inline-block bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-lg">
              <p class="text-gray-900 text-sm sm:text-base font-medium italic">
                "Het rendement van mijn duurzame installatie staat onder druk.."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
