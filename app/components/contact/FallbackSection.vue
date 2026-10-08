<template>
  <section class="flex flex-col items-center justify-center bg-[#f3f3f3] px-5 py-16 lg:px-0 lg:py-[88px]">
    <div class="flex w-full flex-col items-start gap-10 lg:w-[1000px] lg:flex-row lg:gap-[72px]">
      <form class="flex flex-1 flex-col items-start gap-3.5" @submit.prevent="submit">
        <h2 class="w-full text-[24px] font-bold leading-8 text-black lg:text-[26px] lg:leading-[34px]">
          Liever eerst contact via de mail?
        </h2>
        <p class="w-full text-[15px] font-medium leading-[22px] text-gray-500">
          Wij streven ernaar om binnen één werkdag contact met je op te nemen.
        </p>

        <div class="flex w-full flex-col items-start gap-3 pt-2">
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Naam"
            class="w-full rounded-xl border-[1.5px] border-gray-200 bg-white px-[18px] py-[15px] text-[15px] font-medium text-greendee-ink placeholder:text-gray-400"
          >
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="E-mailadres"
            class="w-full rounded-xl border-[1.5px] border-gray-200 bg-white px-[18px] py-[15px] text-[15px] font-medium text-greendee-ink placeholder:text-gray-400"
          >
          <input
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            placeholder="Telefoonnummer (optioneel)"
            class="w-full rounded-xl border-[1.5px] border-gray-200 bg-white px-[18px] py-[15px] text-[15px] font-medium text-greendee-ink placeholder:text-gray-400"
          >
          <textarea
            v-model="form.message"
            required
            placeholder="Je vraag"
            class="h-[110px] w-full resize-none rounded-xl border-[1.5px] border-gray-200 bg-white px-[18px] py-[15px] text-[15px] font-medium text-greendee-ink placeholder:text-gray-400"
          />
          <!-- Spam trap; a real visitor never fills this in. -->
          <input v-model="form.honeypot" type="text" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true">
        </div>

        <button
          type="submit"
          :disabled="state === 'sending'"
          class="flex items-center justify-center rounded-2xl bg-greendee-green px-[26px] py-2.5 text-[14px] font-bold text-white disabled:opacity-60"
        >
          {{ state === 'sending' ? 'Versturen…' : 'Verstuur bericht' }}
        </button>

        <p v-if="state === 'sent'" class="text-[14px] font-medium text-greendee-green">
          Bedankt, je bericht is verstuurd. We nemen snel contact op.
        </p>
        <p v-else-if="state === 'error'" class="text-[14px] font-medium text-red-600">
          Er ging iets mis bij het versturen. Bel ons gerust op 06-34466611.
        </p>
      </form>

      <div class="flex w-full flex-col items-start gap-[22px] overflow-hidden rounded-[20px] bg-white p-[30px] lg:w-[380px]">
        <p class="text-[13px] font-bold text-greendee-green">Of direct</p>
        <div v-for="row in details" :key="row.label" class="flex w-full flex-col items-start gap-0.5">
          <p class="w-full text-[12px] font-medium text-gray-400">{{ row.label }}</p>
          <component
            :is="row.href ? 'a' : 'p'"
            :href="row.href"
            :target="row.external ? '_blank' : undefined"
            :rel="row.external ? 'noopener noreferrer' : undefined"
            class="w-full text-[15px] font-bold text-greendee-ink"
          >
            {{ row.value }}
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({ name: '', email: '', phone: '', message: '', honeypot: '' })
const state = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function submit() {
  state.value = 'sending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: { ...form } })
    state.value = 'sent'
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
  }
  catch {
    state.value = 'error'
  }
}

const details = [
  { label: 'Telefoon', value: '06-34466611', href: 'tel:+31634466611' },
  // Zowel dit adres als het formulier komen uit bij offerte@, zodat aanvragen
  // op een plek binnenkomen in plaats van bij een persoon.
  { label: 'E-mail', value: 'offerte@greendee.nl', href: 'mailto:offerte@greendee.nl' },
  { label: 'IJzendoorn', value: 'Saneringsweg 3, 4053 JK' },
  { label: 'Alkmaar', value: 'Bergerweg 200, 1817 MN' },
  {
    label: 'LinkedIn',
    value: 'Lars van Dee',
    href: 'https://www.linkedin.com/in/larsvandee/',
    external: true,
  },
]
</script>
