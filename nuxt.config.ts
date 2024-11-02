export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui'
  ],
  build: {
    transpile: ['radix-vue'],
  },
  ui: {
    global: true,
    icons: ['heroicons']
  }
})