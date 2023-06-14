// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@vueuse/nuxt", "@nuxt/image"],
  css: [
    "@unocss/reset/tailwind.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],

  runtimeConfig: {
    app: {
      corporation: "中国铁路上海局集团有限公司",
      serverUrl: "",
    },
  },

  plugins: ["~/plugins/primevue.ts"],

  build: {
    transpile: ["primevue"],
  },
});
