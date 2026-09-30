/** @type {import('tailwindcss').Config} */

// Tokens are lifted from the v2 Figma file (9AUif5J5DJOqiJMAE3pD6p). That file
// barely uses Figma variables, so the values below were read off the actual
// frames rather than exported — keep them in sync by hand when the design moves.
export default {
  darkMode: 'class',
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'greendee-green': '#0F650C',
        'greendee-yellow': '#F3BE4B',
        // Near-black used for body copy, the footer and the text on yellow
        // buttons. The v1 site used a green footer; v2 moved it to this navy.
        'greendee-ink': '#111827',
        // Page background for the alternating light sections.
        'greendee-surface': '#F9FAFB',
        // Only appears as the translucent backdrop of the Diensten dropdown.
        'greendee-green-deep': '#0A3D08',
        // The footer and the darkest bar of the sustainability score.
        'greendee-green-darkest': '#024100',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing }] — the design's type scale.
        'display': ['48px', { lineHeight: '1.1', letterSpacing: '0.48px' }],
        'h2': ['36px', { lineHeight: '44px', letterSpacing: '0' }],
        'h3': ['24px', { lineHeight: '1', letterSpacing: '0' }],
        'body': ['18px', { lineHeight: '26px', letterSpacing: '-0.36px' }],
        'nav': ['14.5px', { lineHeight: '1' }],
      },
      maxWidth: {
        // The content column inside the 1440px desktop frame.
        'container': '1152px',
      },
      height: {
        'header': '88px',
      },
      borderRadius: {
        'dropdown': '14px',
        'dropdown-item': '9px',
      },
      boxShadow: {
        'hero-title': '0px 8px 28px rgba(0,0,0,0.25)',
      },
      textShadow: {
        'hero': '0px 8px 28px rgba(0,0,0,0.25)',
        'hero-mobile': '0px 2px 10px rgba(0,0,0,0.45)',
        'hero-sub': '0px 1px 6px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [
    // Tailwind 3 has no text-shadow utility, and the hero headline is unreadable
    // against the sky without one.
    function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') },
      )
    },
  ],
}
