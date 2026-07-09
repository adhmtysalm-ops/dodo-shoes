// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://cloudflare-hono-drizzle-zod-starter-pack.adhmtysalm-03b.workers.dev'
    }
  }
})
