<template>
  <section class="flex flex-col items-center justify-end bg-white px-5 py-16 lg:px-0 lg:py-[88px]">
    <div class="flex w-full max-w-container flex-col items-start gap-10 lg:flex-row lg:gap-20">
      <div class="flex flex-1 flex-col items-start justify-center gap-8 lg:gap-[38px]">
        <h2 class="w-full text-[24px] font-bold leading-8 text-greendee-ink lg:text-[28px] lg:leading-9">
          Wat u kunt verwachten
        </h2>

        <div v-for="item in verwachtingen" :key="item.title" class="flex w-full items-start gap-4">
          <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f3f3f3]">
            <img :src="item.icon" alt="" class="size-[22px]" aria-hidden="true">
          </div>
          <div class="flex flex-1 flex-col items-start gap-1">
            <p class="w-full text-[17px] font-bold text-greendee-ink">{{ item.title }}</p>
            <p class="w-full text-[14px] font-medium leading-[21px] text-gray-600">{{ item.body }}</p>
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col items-start gap-[18px] overflow-hidden rounded-[20px] bg-[#f3f3f3] p-8 lg:w-[420px]">
        <picture>
          <source srcset="/v2/lars-portret.webp" type="image/webp">
          <img
            src="/v2/lars-portret.jpg"
            alt="Lars van Dee, oprichter van GreenDee"
            class="size-24 rounded-full object-cover"
            width="96"
            height="96"
          >
        </picture>
        <div class="flex w-full flex-col items-start gap-0.5">
          <p class="w-full text-[22px] font-bold text-greendee-ink">Lars van Dee</p>
          <p class="w-full text-[14px] font-medium text-gray-600">Oprichter GreenDee</p>
        </div>
        <p class="w-full text-[14px] font-medium leading-[21px] text-gray-600">
          Het gesprek vindt plaats met Lars van Dee, eigenaar van GreenDee.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const verwachtingen = [
  {
    icon: '/v2/icon-klok.svg',
    title: 'Een gesprek van 30 minuten.',
    body: 'Een kort gesprek waarin we uw situatie doornemen.',
  },
  {
    icon: '/v2/icon-schild.svg',
    title: 'Gratis en vrijblijvend.',
    body: 'Geen kosten, geen offerte die u moet tekenen, geen verplichtingen achteraf.',
  },
  {
    icon: '/v2/icon-video.svg',
    title: 'Online of bij u op locatie.',
    body: 'GreenDee is landelijk actief en komt graag bij u op locatie. Wij inventariseren eerst telefonisch of online of wij iets voor elkaar kunnen betekenen.',
  },
]
</script>
