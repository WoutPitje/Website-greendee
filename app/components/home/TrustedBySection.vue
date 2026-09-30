<template>
  <section class="bg-greendee-green py-5">
    <!-- In het ontwerp staan de zes logo's op één rij over de volle breedte.
         Op smallere schermen schuift die rij horizontaal mee in plaats van te
         wrappen, zodat de balk altijd één regel blijft. -->
    <div
      class="flex items-center gap-14 overflow-x-auto px-5 lg:justify-between lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <!-- Placeholders tot GreenDee de logobestanden aanlevert en bevestigt dat
           elk merk getoond mag worden. -->
      <div
        v-for="company in companies"
        :key="company"
        class="flex h-[67px] w-[180px] shrink-0 items-center justify-center rounded-lg bg-white/10 px-3 text-center"
      >
        <span class="text-[12px] font-medium leading-tight text-white/70">{{ company }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const companies = [
  'Amsterdam Warehouse Company',
  'Fresh2you',
  'A. van Boekel',
  'Burger Boerderijen Osterworld',
  'Hoek Bouma',
  'Aventurijn',
]
</script>
