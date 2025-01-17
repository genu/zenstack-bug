// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
