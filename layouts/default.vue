<script setup></script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] h-screen overflow-auto">
    <PageHeaderNew />
    <div class="">
      <slot />
    </div>
    <PageFooter />
  </div>
</template>
