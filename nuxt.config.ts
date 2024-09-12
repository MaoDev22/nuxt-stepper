// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    "@components": "~/components",
    "@composables": "~/composables",
    "@utils": "~/utils",
    "@services": "~/services",
  },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Raleway: {
            wght: [100, 400, 800],
            ital: [100]
          },
        },
      },
    ]
  ],
  css: ['~/assets/css/global.css']
})
