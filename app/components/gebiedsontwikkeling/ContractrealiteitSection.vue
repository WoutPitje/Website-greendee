<template>
  <section class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
        <div>
          <h2 class="text-base font-semibold leading-7 text-greendee-green">Marktverandering</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nieuwe contractrealiteit (2025)
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            De markt verschuift van 24/7 transportrecht naar flexibel transport. Dat betekent:
          </p>
          <ul class="mt-8 space-y-4">
            <li v-for="item in veranderingen" :key="item" class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-greendee-green mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
              </svg>
              <span class="text-base leading-7 text-gray-600">{{ item }}</span>
            </li>
          </ul>

          <div class="mt-10 rounded-2xl bg-red-50 border border-red-200 p-6">
            <p class="text-base font-semibold text-red-800">
              Jouw project zonder deze kennis leidt tot vertraging of afwijzing door de netbeheerder.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img
            src="/gebiedsontwikkeling-illustratie.png"
            alt="Energyhub illustratie"
            class="w-full max-w-lg rounded-2xl"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const veranderingen = [
  'Transport wordt tijdsgebonden en flexibiliteit krijgt economische waarde',
  'Groepscontracten worden strategisch instrument',
  'Verplichte congestiedeelnames nemen toe',
  'Flexibiliteit moet aantoonbaar en contractueel geborgd zijn',
]
</script>
