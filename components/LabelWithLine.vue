<template>
  <div class="text-2xl flex items-center justify-center">
    <div class="w-20 h-1 my-8 border-0 rounded" :class="borderClass"></div>

    <div class="w-4 h-1 m-4 border-0 rounded" :class="borderClass"></div>

    <TitleWithShadow :title="title" />

    <div class="w-4 h-1 m-4 border-0 rounded" :class="borderClass"></div>

    <div class="w-20 h-1 my-8 border-0 rounded" :class="borderClass"></div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title: String;
  titleClass?: String;
  borderClass?: String;
}

withDefaults(defineProps<Props>(), {
  title: () => "",
  titleClass: () => "text-primary dark:text-blue-700",
  borderClass: () => "bg-primary dark:bg-blue-700",
});
</script>
