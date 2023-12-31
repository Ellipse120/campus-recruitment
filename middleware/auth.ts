import { useCookies } from "@vueuse/integrations/useCookies";

export default defineNuxtRouteMiddleware((to, from) => {
  const cookies = useCookies();
  const token = cookies.get("token");

  if (!token) {
    return navigateTo("/login");
  }
});
