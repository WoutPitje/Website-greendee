<template>
  <div>
    <!-- Juridische pagina's staan niet in het ontwerp. Ze krijgen daarom een
         sobere kop in de huisstijl in plaats van een hero met foto: een
         marketingbeeld boven voorwaarden leest verkeerd, en de tekst zelf is
         waar het hier om gaat. -->
    <section class="bg-greendee-green px-5 pb-16 pt-[120px] lg:px-36 lg:pb-20 lg:pt-[160px]">
      <div class="mx-auto flex w-full max-w-container flex-col items-start gap-3">
        <p class="text-[15px] font-bold leading-[26px] text-greendee-yellow">{{ eyebrow }}</p>
        <h1 class="w-full text-[32px] font-extrabold leading-10 text-white lg:text-display lg:leading-[56px]">
          {{ title }}
        </h1>
        <p class="w-full max-w-[720px] text-[15px] font-medium leading-[26px] text-white/85 lg:text-[17px] lg:leading-7">
          {{ intro }}
        </p>
      </div>
    </section>

    <section class="rounded-t-[40px] bg-white px-5 pb-24 pt-16 lg:px-36 lg:pt-[72px]">
      <div class="prose-legal mx-auto w-full max-w-[760px]">
        <p class="!mt-0 text-[14px] font-medium text-gray-500">
          Laatst bijgewerkt op {{ updated }}
        </p>

        <slot />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  intro: string
  /** Al opgemaakt als leesbare datum, bijvoorbeeld "2 oktober 2026". */
  updated: string
}>()
</script>

<style scoped>
.prose-legal :deep(h2) {
  @apply mt-12 text-[22px] font-bold leading-8 text-greendee-ink;
}
.prose-legal :deep(h3) {
  @apply mt-8 text-[18px] font-bold leading-7 text-greendee-ink;
}
.prose-legal :deep(p) {
  @apply mt-4 text-[16px] font-medium leading-7 text-gray-600;
}
.prose-legal :deep(ul) {
  @apply mt-4 list-disc space-y-2 pl-6 text-[16px] font-medium leading-7 text-gray-600;
}
.prose-legal :deep(ol) {
  @apply mt-4 list-decimal space-y-2 pl-6 text-[16px] font-medium leading-7 text-gray-600;
}
.prose-legal :deep(a) {
  @apply font-semibold text-greendee-green underline underline-offset-2 transition-opacity hover:opacity-70;
}
.prose-legal :deep(strong) {
  @apply font-bold text-greendee-ink;
}
/* Tabellen mogen breder zijn dan de tekstkolom en scrollen dan apart, zodat de
   pagina zelf nooit horizontaal meegaat. */
.prose-legal :deep(.tabel-scroll) {
  @apply mt-6 overflow-x-auto;
}
.prose-legal :deep(table) {
  @apply w-full min-w-[520px] border-collapse text-left text-[15px];
}
.prose-legal :deep(th) {
  @apply border-b border-gray-200 py-3 pr-4 font-bold text-greendee-ink;
}
.prose-legal :deep(td) {
  @apply border-b border-gray-100 py-3 pr-4 align-top font-medium text-gray-600;
}
</style>
