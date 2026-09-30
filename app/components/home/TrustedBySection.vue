<template>
  <section class="bg-greendee-green py-5">
    <!-- In het ontwerp staan de logo's op één rij over de volle breedte. Op
         smallere schermen schuift die rij horizontaal mee in plaats van te
         wrappen, zodat de balk altijd één regel blijft. -->
    <div
      class="flex items-center gap-14 overflow-x-auto px-5 lg:justify-center lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <!-- De logo's van greendee.nl hebben een witte achtergrond, geen
           uitgesneden witte variant. Op het groen krijgen ze daarom een wit
           kaartje in plaats van los op de achtergrond te staan. -->
      <div
        v-for="logo in logos"
        :key="logo.naam"
        class="flex h-[67px] w-[180px] shrink-0 items-center justify-center rounded-lg bg-white px-4"
      >
        <img
          :src="logo.src"
          :alt="logo.naam"
          class="max-h-[47px] w-auto max-w-full object-contain"
          loading="lazy"
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Overgenomen van greendee.nl, waar deze vier als logo in de CMS staan.
const logos = [
  { naam: 'A.N. Boekel', src: '/v2/logos/boekel.png' },
  { naam: 'Burgerboerderij Oosterwold', src: '/v2/logos/oosterwold.png' },
  { naam: 'Aventurijn', src: '/v2/logos/aventurijn.png' },
  { naam: 'C.J. Langbroek Zeevisgroothandel', src: '/v2/logos/langbroek.png' },
]
</script>
