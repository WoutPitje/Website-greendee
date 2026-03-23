<template>
  <section id="contact" class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-greendee-green">Zet de knop om</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Plan een strategisch verkennend gesprek
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Klaar voor de volgende stap? Neem direct contact op voor een vrijblijvend gesprek.
        </p>
      </div>

      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <!-- Form -->
        <div>
          <!-- Success message -->
          <div v-if="submitted" class="rounded-2xl bg-greendee-green/5 border border-greendee-green/20 p-8 text-center">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-greendee-green/10 mb-4">
              <svg class="h-6 w-6 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Bericht verzonden</h3>
            <p class="mt-2 text-base text-gray-600">Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.</p>
            <button
              type="button"
              class="mt-6 text-sm font-semibold text-greendee-green hover:text-green-700"
              @click="resetForm"
            >
              Nog een bericht versturen
            </button>
          </div>

          <!-- Form -->
          <form v-else class="space-y-6" @submit.prevent="handleSubmit">
            <!-- Honeypot -->
            <input type="text" name="honeypot" class="hidden" v-model="form.honeypot">

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label for="contact-naam" class="block text-sm font-semibold leading-6 text-gray-900">Naam</label>
                <input
                  v-model="form.name"
                  type="text"
                  id="contact-naam"
                  name="name"
                  required
                  class="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-greendee-green focus:ring-1 focus:ring-greendee-green sm:text-sm"
                  placeholder="Uw naam"
                >
              </div>
              <div>
                <label for="contact-bedrijfsnaam" class="block text-sm font-semibold leading-6 text-gray-900">
                  Bedrijfsnaam <span class="font-normal text-gray-500">(optioneel)</span>
                </label>
                <input
                  v-model="form.bedrijfsnaam"
                  type="text"
                  id="contact-bedrijfsnaam"
                  name="bedrijfsnaam"
                  class="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-greendee-green focus:ring-1 focus:ring-greendee-green sm:text-sm"
                  placeholder="Uw bedrijfsnaam"
                >
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label for="contact-email" class="block text-sm font-semibold leading-6 text-gray-900">E-mail</label>
                <input
                  v-model="form.email"
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  class="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-greendee-green focus:ring-1 focus:ring-greendee-green sm:text-sm"
                  placeholder="uw@email.nl"
                >
              </div>
              <div>
                <label for="contact-telefoon" class="block text-sm font-semibold leading-6 text-gray-900">Telefoonnummer</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  id="contact-telefoon"
                  name="phone"
                  class="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-greendee-green focus:ring-1 focus:ring-greendee-green sm:text-sm"
                  placeholder="06-12345678"
                >
              </div>
            </div>
            <div>
              <label for="contact-probleem" class="block text-sm font-semibold leading-6 text-gray-900">Probleemomschrijving</label>
              <textarea
                v-model="form.message"
                id="contact-probleem"
                name="message"
                rows="4"
                required
                class="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-greendee-green focus:ring-1 focus:ring-greendee-green sm:text-sm"
                placeholder="Beschrijf uw situatie..."
              />
            </div>

            <!-- Error message -->
            <p v-if="error" class="text-sm text-red-600">{{ error }}</p>

            <button
              type="submit"
              :disabled="loading"
              class="w-full rounded-md bg-greendee-green px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loading ? 'Verzenden...' : 'Versturen' }}
            </button>
          </form>
        </div>

        <!-- Right side: contact info OR images -->
        <div v-if="variant === 'info'" class="flex flex-col justify-center">
          <div class="space-y-10">
            <div class="flex gap-x-5">
              <div class="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-greendee-green/10">
                <svg class="h-6 w-6 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">Telefoon</h3>
                <p class="mt-1 text-sm text-gray-600">Direct bereikbaar voor vragen</p>
                <a href="tel:0634466611" class="mt-1 text-base font-semibold text-greendee-green hover:text-green-700">06-34466611</a>
              </div>
            </div>
            <div class="flex gap-x-5">
              <div class="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-greendee-green/10">
                <svg class="h-6 w-6 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">E-mail</h3>
                <p class="mt-1 text-sm text-gray-600">Stuur een bericht</p>
                <a href="mailto:lars@greendee.nl" class="mt-1 text-base font-semibold text-greendee-green hover:text-green-700">lars@greendee.nl</a>
              </div>
            </div>
            <div class="flex gap-x-5">
              <div class="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-greendee-green/10">
                <svg class="h-6 w-6 text-greendee-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">LinkedIn</h3>
                <p class="mt-1 text-sm text-gray-600">Professioneel netwerk</p>
                <a href="https://www.linkedin.com/in/larsvandee/" target="_blank" rel="noopener noreferrer" class="mt-1 text-base font-semibold text-greendee-green hover:text-green-700">Lars van Dee</a>
              </div>
            </div>
            <div class="flex gap-x-5">
              <div class="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-greendee-green/10">
                <svg class="h-6 w-6 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold leading-7 text-gray-900">Locatie</h3>
                <p class="mt-1 text-sm text-gray-600">IJzendoorn, Gelderland</p>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="hidden lg:block">
          <!-- Single image -->
          <div v-if="images.length === 1" class="overflow-hidden rounded-2xl shadow-xl">
            <img
              :src="images[0]"
              alt=""
              class="w-full object-cover"
            >
          </div>
          <!-- Multiple images: 1 large + 2 small -->
          <div v-else class="grid grid-cols-2 gap-4">
            <div class="col-span-2 overflow-hidden rounded-2xl shadow-xl">
              <img
                :src="images[0]"
                alt=""
                class="h-64 w-full object-cover"
              >
            </div>
            <div v-if="images[1]" class="overflow-hidden rounded-2xl shadow-xl">
              <img
                :src="images[1]"
                alt=""
                class="h-48 w-full object-cover"
              >
            </div>
            <div v-if="images[2]" class="overflow-hidden rounded-2xl shadow-xl">
              <img
                :src="images[2]"
                alt=""
                class="h-48 w-full object-cover"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (v) => ['info', 'images'].includes(v),
  },
  images: {
    type: Array,
    default: () => [
      '/gebiedsontwikkeling-presentatie.jpg',
    ],
  },
})

const STATIC_FORMS_KEY = 'sf_91eb2b5828a335ddc552fd23'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  bedrijfsnaam: '',
  message: '',
  honeypot: '',
})

const loading = ref(false)
const submitted = ref(false)
const error = ref('')

const handleSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    const res = await fetch('https://api.staticforms.dev/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiKey: STATIC_FORMS_KEY,
        subject: `Contactaanvraag van ${form.name}`,
        name: form.name,
        email: form.email,
        phone: form.phone,
        bedrijfsnaam: form.bedrijfsnaam,
        message: form.message,
        honeypot: form.honeypot,
        replyTo: form.email,
      }),
    })

    const data = await res.json()

    if (data.success) {
      submitted.value = true
    } else {
      error.value = 'Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact op.'
    }
  } catch {
    error.value = 'Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact op.'
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.bedrijfsnaam = ''
  form.message = ''
  form.honeypot = ''
  submitted.value = false
  error.value = ''
}
</script>
