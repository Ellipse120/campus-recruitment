import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@vee-validate/nuxt",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    // "primeicons/primeicons.css",
    "vuetify/styles",
    "@unocss/reset/tailwind.css",
    "@/assets/main.css",
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

  plugins: ["~/plugins/vuetify.ts", "~/plugins/primevue.ts"],

  build: {
    transpile: ["primevue", "vuetify"],
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});
