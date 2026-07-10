/* eslint-disable node/no-process-env */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@700&display=swap" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://cloudflare-hono-drizzle-zod-starter-pack.adhmtysalm-03b.workers.dev",
    },
  },
});
