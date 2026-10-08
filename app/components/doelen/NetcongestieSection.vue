<template>
  <section class="bg-white px-5 py-16 lg:px-36 lg:py-24">
    <div class="mx-auto flex w-full max-w-container flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
      <div class="flex flex-col gap-4 lg:flex-1">
        <!-- Vijfentwintig blokjes, één per megawatt. De kleur laat zien in welke
             stap die megawatt gehaald moet zijn; samen vormen ze het doel. -->
        <div class="grid w-fit grid-cols-5 gap-1.5" role="img" aria-label="Vijfentwintig megawatt, verdeeld over drie tussendoelen">
          <div
            v-for="(mw, index) in 25"
            :key="mw"
            class="size-10 rounded-md lg:size-14"
            :class="kleurVoor(index)"
          />
        </div>

        <!-- Losse li's in plaats van losse span's: zo blijven de drie labels van
             elkaar gescheiden voor een schermlezer en als CSS wegvalt, in plaats
             van alleen optisch gescheiden door een flex-gap. -->
        <ul class="flex flex-wrap items-start gap-x-[18px] gap-y-1.5">
          <li v-for="deel in legenda" :key="deel.label" class="flex items-center gap-[7px]">
            <span class="size-[11px] shrink-0 rounded-[3px]" :class="deel.klasse" aria-hidden="true" />
            <span class="text-[13px] font-medium leading-5 text-gray-600">{{ deel.label }}</span>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-3.5 lg:flex-1">
        <h2 class="text-[28px] font-extrabold leading-9 tracking-[-0.54px] text-greendee-ink lg:text-[36px] lg:leading-[41px]">
          Netcongestie verkleinen
        </h2>
        <p class="text-[56px] font-extrabold leading-[60px] tracking-[-2.52px] text-greendee-green lg:text-[84px] lg:leading-[88px]">
          25 MW
        </p>
        <p class="text-[16px] font-medium leading-7 text-gray-600 lg:text-[18px] lg:leading-[29px]">
          Samen is 25 MW gelijk aan 25 grootverbruikaansluitingen, de gelijktijdige piekvraag
          van circa 12.000 huishoudens of het vermogen van vier grote windturbines.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// De eerste vijf horen bij eind 2028, de volgende tien bij eind 2030 en de
// laatste tien bij eind 2031. De doelen zijn cumulatief: 5, dan 15, dan 25.
function kleurVoor(index: number) {
  if (index < 5) return 'bg-greendee-yellow'
  if (index < 15) return 'bg-[#7fbf79]'
  return 'bg-greendee-green'
}

const legenda = [
  { label: '5 MW eind 2028', klasse: 'bg-greendee-yellow' },
  { label: '15 MW eind 2030', klasse: 'bg-[#7fbf79]' },
  { label: '25 MW eind 2031', klasse: 'bg-greendee-green' },
]
</script>
