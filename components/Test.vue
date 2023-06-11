<script setup lang="ts">
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<template>
  <div class="p-1 text-2xl p-8 bg-red-500">Hello</div>

  <div>pos: {{ x }}, {{ y }}</div>
</template>
