// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/ui", '@nuxtjs/i18n'],

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