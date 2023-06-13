<script setup>
import "@unocss/reset/tailwind.css";
</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  color-scheme: normal;
}

a {
  /* color: inherit; */
  /* text-decoration: inherit; */
}
</style>
