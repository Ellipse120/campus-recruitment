import { useCookies } from "@vueuse/integrations/useCookies";

export const useAuth = () => {
  const cookies = useCookies();

  const token = cookies.get("token");

  const isLoggedIn = computed(() => !!token);

  const setToken = (v: String) => {
    cookies.set("token", v);
  };

  return {
    token,
    isLoggedIn,
    setToken,
  };
};
