// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/ui"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  experimental: {
    viewTransition: true,
},

  compatibilityDate: "2024-08-31",
})