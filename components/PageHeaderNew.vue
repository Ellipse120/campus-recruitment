<script setup>
import logoUrl from "@/assets/imgs/logo.png";

const logo = ref(logoUrl);
const menus = ref(useRuntimeConfig().app.routes);
const corporation = useRuntimeConfig().app.corporation;

const [visible, toggle] = useToggle();
const router = useRouter()
const jumpTo = function (name) {
  router.push({
    name: name
  })
}

const menuRef = ref(null);
const isIntersecting = ref(false)
const onIntersect = function (isIntersect, entries, observer) {
  isIntersecting.value = isIntersect
}
</script>

<template>
  <header class="h-35">
    <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true" />
    <nav v-intersect="onIntersect"
      class="w-full bg-white text-black dark:bg-gray-700/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
      <div class="w-full">
        <div class="md:pt-3 w-full md:gap-0 lg:pt-5">
          <div class="w-full items-center flex justify-center lg:w-auto divide-gray divide-x">
            <a class="relative z-10 flex items-center justify-center text-3xl pr-3" href="/" aria-label="logo"
              @click="toggle(false)">
              <img :src="logo" class="h-10 w-12" />
              {{ corporation }}
            </a>
            <div class="text-blue-700 pl-3 text-3xl pr-10">应届大学生招聘平台</div>
            <div class="pl-10">
              <Button label="登录" class="mr-2 h-8" @click="jumpTo('login')" />
              <Button label="注册" class="h-8" @click="jumpTo('register')" />
            </div>
          </div>
          <div ref="menuRef" class="navmenu w-full">
            <div
              class="text-black flex items-center justify-center w-full bg-gray-100 dark:text-gray-300 dark:bg-gray-8 mt-5 lg:pr-4">
              <div class="font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                <NuxtLink v-for="(route, index) in menus" :key="route.label + index" :to="route.to"
                  class="block text-black text-xl font-black px-2 h-15 flex items-center justify-center w-30 lg:px-1 transition duration-400 hover:text-indigo-500 dark:hover:text-primaryLight"
                  @click="toggle()">
                  <span>{{ route.label }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
body {
  font-family: 微软雅黑, Urbanist, sans-serif;
  @apply bg-white dark: bg-gray-900;
}

.navbar-active .hamburger div:first-child {
  @apply rotate-45 translate-y-1.5;
}

.navbar-active .hamburger div:last-child {
  @apply -rotate-45 -translate-y-1;
}

.navbar-active div:first-child div:first-child div:last-child {
  @apply block lg: flex;
}
</style>
