<template>
  <!-- Pas tonen als we de opgeslagen keuze echt gelezen hebben. Anders flitst
       de balk bij elke bezoeker even voorbij, ook bij wie al heeft gekozen. -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="translate-y-4 opacity-0"
  >
    <div
      v-if="zichtbaar"
      role="dialog"
      aria-label="Cookies"
      class="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-[720px] rounded-[20px] bg-greendee-green-darkest p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] lg:p-7"
    >
      <p class="text-[15px] font-bold leading-6 text-white">Mogen we meekijken?</p>
      <p class="mt-2 text-[14px] font-medium leading-6 text-white/80">
        Met je toestemming meten wij via Google Analytics welke pagina's worden
        bekeken, zodat we de site kunnen verbeteren. Zeg je nee, dan gebeurt er
        niets: er wordt dan geen cookie geplaatst en geen gegeven naar Google
        gestuurd. Meer hierover staat in onze
        <NuxtLink to="/privacyverklaring" class="font-semibold text-white underline underline-offset-2">privacyverklaring</NuxtLink>.
      </p>

      <div class="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          class="flex items-center justify-center rounded-2xl bg-greendee-yellow px-5 py-3 text-[15px] font-bold text-greendee-ink transition-transform hover:-translate-y-0.5"
          @click="accepteer"
        >
          Accepteren
        </button>
        <button
          type="button"
          class="flex items-center justify-center rounded-2xl border border-white/30 px-5 py-3 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          @click="weiger"
        >
          Alleen noodzakelijk
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { keuze, gelezen, lees, accepteer, weiger } = useCookieConsent()
const beschikbaar = useAnalyticsBeschikbaar()

onMounted(lees)

// Geen balk waar niets gemeten wordt: lokaal en op staging zou hij om
// toestemming vragen voor iets dat daar toch niet draait.
const zichtbaar = computed(() => beschikbaar && gelezen.value && keuze.value === 'onbekend')
</script>
