<script setup></script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] h-screen">
    <PageHeader />
    <div class="p-4">
      <slot />
    </div>
    <PageFooter />
  </div>
</template>
