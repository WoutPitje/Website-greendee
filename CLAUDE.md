# Nuxt 4 Development Guide

## Project Structure

Nuxt 4 introduces a new default directory structure with an `app/` directory:

```
my-nuxt-app/
├─ app/
│  ├─ assets/          # Stylesheets, fonts, images
│  ├─ components/      # Vue components
│  ├─ composables/     # Composables
│  ├─ layouts/         # Layout templates
│  ├─ middleware/      # Route middleware
│  ├─ pages/           # File-based routing
│  ├─ plugins/         # Plugins
│  ├─ utils/           # Helper functions
│  ├─ app.vue          # Main app component
│  ├─ app.config.ts    # App configuration
│  └─ error.vue        # Error page
├─ content/            # Content files
├─ public/             # Static files
├─ server/             # Server-side code
└─ nuxt.config.ts      # Nuxt configuration
```

## Key Concepts

### Pages
- File-based routing in `app/pages/`
- Server-only pages with `.server.vue` suffix
- Page metadata with `definePageMeta()`

Example page:
```vue
<template>
  <div>
    <h1>Welcome</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
  middleware: 'auth'
})
</script>
```

### Layouts
- Defined in `app/layouts/`
- Default layout: `layouts/default.vue`
- Enable with `<NuxtLayout>` in app.vue

Example layout:
```vue
<template>
  <div>
    <header>Header</header>
    <slot />
    <footer>Footer</footer>
  </div>
</template>
```

### Components
- Auto-imported from `app/components/`
- Lazy hydration support
- Built-in components: `<ClientOnly>`, `<DevOnly>`

## Tailwind CSS Setup

### Option 1: @nuxtjs/tailwindcss Module (Recommended)

```bash
npm install -D @nuxtjs/tailwindcss
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    viewer: true,
  }
})
```

### Option 2: Manual Tailwind CSS v4 Setup

```bash
npm install -D tailwindcss@next @tailwindcss/postcss@next
```

Create `assets/css/main.css`:
```css
@import "tailwindcss";
```

Configure `nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
})
```

## Project-Specific Information

### GreenDee Brand Colors
- Primary Green: `#0F650C`
- Secondary Yellow: `#F3BE4B`

### Tailwind Config for GreenDee
```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        'greendee-green': '#0F650C',
        'greendee-yellow': '#F3BE4B',
      }
    }
  }
}
```

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Best Practices

1. **Use app/ directory** - Keep all application code in the app/ folder
2. **TypeScript** - Nuxt 4 has enhanced TypeScript support
3. **Data Fetching** - Use `useFetch` or `useAsyncData` for data fetching
4. **SEO** - Use `useHead` composable for meta tags
5. **Performance** - Leverage lazy loading and code splitting

## Common Patterns

### SEO Setup
```vue
<script setup>
useHead({
  title: 'GreenDee - Duurzame Energie',
  meta: [
    { name: 'description', content: 'GreenDee helpt Nederland een stap verder in de energietransitie' }
  ]
})
</script>
```

### Responsive Images
```vue
<template>
  <img 
    src="/logo.png" 
    alt="GreenDee Logo"
    class="w-full max-w-xs"
  />
</template>
```

### Navigation Component
```vue
<template>
  <nav class="bg-greendee-green">
    <NuxtLink to="/" class="text-white">Home</NuxtLink>
    <NuxtLink to="/diensten" class="text-white">Diensten</NuxtLink>
    <NuxtLink to="/contact" class="text-white">Contact</NuxtLink>
  </nav>
</template>
```