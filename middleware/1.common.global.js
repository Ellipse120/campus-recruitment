import { useTitle } from "@vueuse/core";

export default defineNuxtRouteMiddleware((to, from) => {
  const t = useRuntimeConfig().app.routes.find((r) => r.to === to.path);
  useTitle(
    `${t?.label || to?.meta?.title || ""} - ${
      useRuntimeConfig().app.corporation
    }`
  );
});
