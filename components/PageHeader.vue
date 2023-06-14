<script setup>
import logoUrl from "@/assets/imgs/logo.png";

const logo = ref(logoUrl);
const menus = ref(useRuntimeConfig().app.routes);
const corporation = useRuntimeConfig().app.corporation;

const [visible, toggle] = useToggle();

const menuRef = ref(null);
</script>

<template>
  <header class="h-20">
    <input
      type="checkbox"
      name="hbr"
      id="hbr"
      class="hbr peer"
      hidden
      aria-hidden="true"
    />
    <nav
      class="fixed z-20 w-full bg-blue-800/20 text-primary dark:bg-gray-700/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none"
    >
      <div class="xl:container m-auto px-6 md:px-12 lg:px-6">
        <div
          class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5"
        >
          <div class="w-full items-center flex justify-between lg:w-auto">
            <a
              class="relative z-10 flex items-center justify-center"
              href="/"
              aria-label="logo"
              @click="toggle(false)"
            >
              <img :src="logo" class="h-10 w-12" />
              {{ corporation }}
            </a>
            <label
              for="hbr"
              class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              @click="toggle()"
            >
              <div
                aria-hidden="true"
                class="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                class="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
              ></div>
            </label>
          </div>
          <div
            ref="menuRef"
            class="navmenu w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-8/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0"
            :class="{ block: visible, hidden: !visible }"
          >
            <div class="text-black dark:text-gray-300 lg:pr-4">
              <div
                class="font-medium text-base lg:text-sm lg:flex lg:space-y-0"
              >
                <NuxtLink
                  v-for="(route, index) in menus"
                  :key="route.label + index"
                  :to="route.to"
                  class="block text-sky-500 px-2 lg:px-1 transition duration-400 hover:text-indigo-500 dark:hover:text-primaryLight"
                  @click="toggle()"
                >
                  <span>{{ route.label }}</span>
                </NuxtLink>
              </div>
            </div>

            <div
              class="border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row lg:space-y-0 md:w-max lg:border-l"
            >
              <NuxtLink
                to="/"
                class="flex items-center justify-center sm:px-6 transition-all duration-300 text-indigo-600 dark:text-primaryLight hover:text-red-500"
              >
                <span class="text-sm font-semibold">注册</span>
              </NuxtLink>
              <NuxtLink
                to="/login"
                class="flex items-center justify-center sm:px-6 transition-all duration-300 text-indigo-600 dark:text-primaryLight hover:text-red-500"
              >
                <span class="text-sm font-semibold">登录</span>
              </NuxtLink>
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
  @apply bg-white dark:bg-gray-900;
}

.navbar-active .hamburger div:first-child {
  @apply rotate-45 translate-y-1.5;
}
.navbar-active .hamburger div:last-child {
  @apply -rotate-45 -translate-y-1;
}
.navbar-active div:first-child div:first-child div:last-child {
  @apply block lg:flex;
}
</style>
