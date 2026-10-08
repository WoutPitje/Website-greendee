<template>
  <section class="bg-[#ecf4eb] px-5 py-16 lg:px-36 lg:py-16">
    <div class="mx-auto w-full max-w-container">
      <div class="flex w-full flex-col gap-[18px]">
        <h2 class="text-[28px] font-extrabold leading-9 tracking-[-0.54px] text-greendee-ink lg:text-[36px] lg:leading-[41px]">
          Cybersecurity: veilig in de energieketen
        </h2>
        <p class="text-[16px] font-medium leading-7 text-gray-600 lg:text-[18px] lg:leading-[29px]">
          Batterijen, EMS, laadpleinen en monitoring zijn op afstand bestuurbare apparaten
          met klantdata. Wie energie-assets ontwikkelt en beheert, is verantwoordelijk voor
          de digitale veiligheid ervan.
        </p>
      </div>

      <ol class="mt-11 grid gap-10 lg:grid-cols-3">
        <li v-for="stop in stops" :key="stop.jaar" class="flex flex-col gap-3.5">
          <!-- De lijn loopt door tot buiten de kolom, zodat de route doorloopt naar de
               volgende stop. Bij de laatste stopt hij binnen de kolom. -->
          <div class="relative h-[21px] w-full">
            <!-- De lijn loopt alleen door naar de volgende kolom waar die er ook
                 naast staat. Onder lg staan de stops onder elkaar en zou hij
                 buiten het scherm steken. -->
            <div
              class="absolute left-0 top-[9px] h-[3px] w-full bg-[#c5d4c3]"
              :class="stop.laatste ? '' : 'lg:w-[calc(100%+40px)]'"
            />
            <img :src="stop.punt" alt="" width="21" height="21" class="absolute left-0 top-0 block">
          </div>

          <p class="text-[15px] font-bold leading-[23px] text-greendee-green">{{ stop.jaar }}</p>
          <h3 class="text-[20px] font-extrabold leading-7 tracking-[-0.24px] text-greendee-ink lg:text-[24px] lg:leading-[29px]">
            {{ stop.titel }}
          </h3>
          <p class="text-[15px] font-medium leading-[25px] text-gray-600">{{ stop.body }}</p>

          <p class="mt-auto border-t border-[#c5d4c3] pt-3 text-[14px] font-medium leading-[22px] text-gray-600">
            <span class="font-bold text-greendee-green">Meetbaar:</span>
            {{ stop.meetbaar }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const stops = [
  {
    jaar: 'Begin 2027',
    titel: 'Cybersecurity als pijler in elk advies',
    punt: '/v2/doelen/punt-open.svg',
    body: 'Vanaf 1 januari 2027 bevat elk advies en elke offerte een securityparagraaf: '
      + 'netwerkscheiding van EMS en laadinfra, toegangsbeheer, updatebeleid van leveranciers '
      + 'en eisen aan monitoring. Vastgelegd als checklist in het kwaliteitshandboek.',
    meetbaar: '100% van de offertes vanaf Q1 2027 met securityparagraaf.',
  },
  {
    jaar: 'Eind 2027',
    titel: 'Alle servers en data in Europa',
    punt: '/v2/doelen/punt-open.svg',
    body: 'GreenDee Compass, NetcongestieOpgelost.nl, monitoring, CRM en administratie '
      + 'draaien uiterlijk 31 december 2027 op servers in de EU. Datalocatie en '
      + 'verwerkersovereenkomsten leggen we contractueel vast bij elke leverancier.',
    meetbaar: 'leveranciersregister met datalocatie per systeem; 0 systemen buiten de EU.',
  },
  {
    jaar: '2030',
    titel: 'ISO 27001 gecertificeerd',
    punt: '/v2/doelen/punt-open.svg',
    body: 'Informatiebeveiligingsbeheer volgens ISO 27001.',
    meetbaar: 'certificaat behaald in 2030; pentestrapport zonder openstaande hoge risico\'s.',
    laatste: true,
  },
]
</script>
