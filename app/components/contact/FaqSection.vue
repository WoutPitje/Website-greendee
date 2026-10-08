<template>
  <!-- De contactpagina heeft een eigen, ruimere FAQ dan de homepage: witte
       achtergrond, alle vragen open en een afsluitende regel. -->
  <section class="flex flex-col items-center justify-center gap-10 bg-white px-5 py-16 lg:px-0 lg:py-[88px]">
    <h2 class="w-full text-center text-[28px] font-bold text-black lg:w-[700px] lg:text-h2">F.A.Q</h2>

    <div class="flex w-full flex-col items-start gap-3 lg:w-[820px]">
      <div
        v-for="(item, index) in faq"
        :key="item.question"
        class="w-full overflow-hidden rounded-[14px] border-[1.5px] border-gray-200 bg-white px-5 py-5 lg:px-[26px] lg:py-[22px]"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 text-left font-bold"
          :aria-expanded="open.has(index)"
          @click="toggle(index)"
        >
          <span class="flex-1 text-[16px] text-greendee-ink lg:text-[17px]">{{ item.question }}</span>
          <span class="shrink-0 text-[20px] text-greendee-green">{{ open.has(index) ? '×' : '+' }}</span>
        </button>
        <p v-if="open.has(index)" class="mt-3 w-full text-[15px] font-medium leading-[23px] text-gray-600">
          {{ item.answer }}
        </p>
      </div>
    </div>

    <p class="pt-4 text-center text-[16px] font-medium text-gray-600">
      Staat je vraag er niet bij? Stel hem gewoon in het gesprek.
    </p>
  </section>
</template>

<script setup lang="ts">
const faq = [
  {
    question: 'Hoe moet ik mij voorbereiden op een gesprek?',
    answer: 'De belangrijkste gegevens die GreenDee nodig heeft zijn je kwartierdata, je energiecontract en de aansluitingsovereenkomst.',
  },
  {
    question: 'Ik ben een particulier. Kan ik ook terecht bij GreenDee?',
    answer: 'Helaas heeft GreenDee momenteel geen aanbod voor particulieren.',
  },
  {
    question: 'Heeft het zin om contact op te nemen als ik nog géén concreet plan heb?',
    answer: 'Zeker! Samen met jou stellen wij een plan op om je duurzame investeringsbesluit rond te maken.',
  },
  {
    question: 'Zit ik ergens aan vast na het gesprek?',
    answer: 'Nee. Pas na ondertekening van de offerte start het betaalde project.',
  },
  {
    question: 'Wat kost een offertetraject of een energiesimulatie?',
    answer: 'De kosten zijn afhankelijk van de omvang van je situatie. Dit kunnen wij samen in het gesprek bekijken.',
  },
]

// Het ontwerp toont alle vragen uitgeklapt.
const open = ref(new Set(faq.map((_, index) => index)))

function toggle(index: number) {
  const next = new Set(open.value)
  next.has(index) ? next.delete(index) : next.add(index)
  open.value = next
}
</script>
