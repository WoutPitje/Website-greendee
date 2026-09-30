<template>
  <section class="flex flex-col items-center justify-center bg-white px-5 py-14 lg:px-0 lg:py-16">
    <div class="flex w-full max-w-container flex-col items-start justify-center gap-10 lg:flex-row lg:items-center lg:gap-[93px]">
      <div class="flex w-full flex-col items-start gap-6 lg:flex-1">
        <div class="flex flex-col items-start gap-[5px] font-bold">
          <p class="text-[15px] leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
            Over GreenDee
          </p>
          <h2 class="text-[28px] leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
            Persoonlijke aanpak, professioneel resultaat.
          </h2>
        </div>

        <p class="text-[15px] font-medium leading-6 tracking-[-0.054px] text-gray-600 lg:text-body lg:tracking-[-0.0648px] lg:text-black">
          GreenDee ondersteunt u bij het realiseren van toekomstbestendige
          energieoplossingen. Onze focus ligt op netcongestie, stijgende
          energiekosten en elektrificatie.
        </p>

        <NuxtLink
          to="/over-ons"
          class="flex items-center justify-center rounded-full bg-greendee-yellow px-6 py-3.5 text-[16px] font-bold leading-[22px] text-greendee-ink lg:px-5 lg:py-3"
        >
          Meer weten?
        </NuxtLink>
      </div>

      <div class="h-[420px] w-full shrink-0 overflow-hidden rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:h-[410px] lg:w-[529.5px]">
        <picture>
          <source srcset="/v2/over-greendee-1280.webp 1280w, /v2/over-greendee-2400.webp 2400w" type="image/webp">
          <img
            src="/v2/over-greendee-2400.jpg"
            srcset="/v2/over-greendee-1280.jpg 1280w, /v2/over-greendee-2400.jpg 2400w"
            alt="Medewerker van GreenDee bij een Cellpower batterijsysteem"
            class="size-full object-cover"
            width="530"
            height="410"
          >
        </picture>
      </div>
    </div>
  </section>
</template>
