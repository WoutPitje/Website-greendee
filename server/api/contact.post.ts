// Contact form endpoint. Sends via Resend's REST API so we don't pull in an
// extra dependency for one HTTP call.

interface ContactBody {
  name?: string
  email?: string
  phone?: string
  bedrijfsnaam?: string
  message?: string
  honeypot?: string
}

const MAX_LENGTHS = {
  name: 200,
  email: 320,
  phone: 50,
  bedrijfsnaam: 200,
  message: 5000,
}

// Public endpoint that sends mail, so cap it per IP. In-memory is enough for a
// single container; it resets on redeploy, which is fine for this purpose.
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)

  // Keep the map from growing without bound on a long-lived container.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key)
    }
  }

  return recent.length > RATE_LIMIT
}

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<ContactBody>(event)

  // Bots fill hidden fields. Report success so they don't retry.
  if (clean(body?.honeypot, 100)) {
    return { success: true }
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown'
  if (isRateLimited(ip)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Te veel aanvragen. Probeer het over een paar minuten opnieuw.',
    })
  }

  const name = clean(body?.name, MAX_LENGTHS.name)
  const email = clean(body?.email, MAX_LENGTHS.email)
  const phone = clean(body?.phone, MAX_LENGTHS.phone)
  const bedrijfsnaam = clean(body?.bedrijfsnaam, MAX_LENGTHS.bedrijfsnaam)
  const message = clean(body?.message, MAX_LENGTHS.message)

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Vul naam, e-mailadres en omschrijving in.',
    })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Ongeldig e-mailadres.' })
  }

  if (!config.resendApiKey) {
    console.error('[contact] NUXT_RESEND_API_KEY is not set')
    throw createError({
      statusCode: 500,
      statusMessage: 'Het formulier is tijdelijk niet beschikbaar.',
    })
  }

  const text = [
    `Naam: ${name}`,
    `E-mail: ${email}`,
    `Telefoon: ${phone || '-'}`,
    `Bedrijfsnaam: ${bedrijfsnaam || '-'}`,
    '',
    'Probleemomschrijving:',
    message,
  ].join('\n')

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.resendApiKey}` },
      body: {
        from: config.contactFrom,
        to: [config.contactTo],
        reply_to: email,
        subject: `Contactaanvraag van ${name}`,
        text,
      },
    })
  } catch (err) {
    // Log the real reason, but don't leak provider details to the browser.
    console.error('[contact] Resend request failed:', err)
    throw createError({
      statusCode: 502,
      statusMessage: 'Verzenden is niet gelukt. Probeer het later opnieuw.',
    })
  }

  return { success: true }
})
