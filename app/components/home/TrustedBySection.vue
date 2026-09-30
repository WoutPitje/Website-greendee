<template>
  <section class="bg-greendee-green py-5">
    <!-- In het ontwerp staat één rij logo's over de volle breedte. Op smallere
         schermen schuift die rij horizontaal mee in plaats van te wrappen. -->
    <div
      class="flex items-center gap-14 overflow-x-auto px-5 lg:justify-between lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <img
        v-for="logo in logos"
        :key="logo.naam"
        :src="logo.src"
        :alt="logo.naam"
        class="h-[67px] w-[180px] shrink-0 object-contain"
        width="180"
        height="67"
        loading="lazy"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
// De aangeleverde logo's zijn transparant, in de witte of kleurvariant die het
// ontwerp per merk gebruikt, en staan dus direct op het groen.
const logos = [
  { naam: 'Amsterdam Warehouse Company', src: '/v2/logos/amsterdam.png' },
  { naam: 'Fresh2you', src: '/v2/logos/fresh2you.png' },
  { naam: 'A. van Boekel', src: '/v2/logos/boekel.png' },
  { naam: 'Burgerboerderij Oosterwold', src: '/v2/logos/oosterwold.png' },
  { naam: 'Hoek Bouma', src: '/v2/logos/hoekbouma.png' },
  { naam: 'Aventurijn', src: '/v2/logos/aventurijn.png' },
]
</script>
