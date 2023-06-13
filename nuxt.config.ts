// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@vueuse/nuxt", "@nuxt/image"],
  css: ["@unocss/reset/normalize.css"],

  runtimeConfig: {
    app: {
      corporation: "中国铁路上海局集团有限公司",
      serverUrl: "",
    },
  },
});
