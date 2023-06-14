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
      routes: [
        { label: "首页", to: "/" },
        { label: "公司简介", to: "/about" },
        { label: "招聘信息", to: "/recruitment-posts" },
        { label: "招聘职位", to: "/recruitment-positions" },
        { label: "招聘动态", to: "/recruitment-trends" },
        { label: "常用资料", to: "/common-attachments" },
        { label: "咨询问答", to: "/consultation-qa" },
        { label: "相关政策", to: "/related-policies" },
        { label: "系统设置", to: "/system-config" },
      ],
    },
  },

  plugins: ["~/plugins/primevue.ts"],

  build: {
    transpile: ["primevue"],
  },
});
