<script setup lang="ts">
export interface Props {
  title: String;
  titleClass?: String;
}

withDefaults(defineProps<Props>(), {
  title: () => "",
  titleClass: () => "text-primary dark:text-blue-700",
});
</script>

<template>
  <div class="relative">
    <div class="font-bold tracking-wide" :class="titleClass">
      {{ title }}
    </div>

    <div
      class="absolute top-2 left-4 w-40 tracking-widest text-left font-bold opacity-10"
      :class="titleClass"
    >
      {{ title }}
    </div>
  </div>
</template>
