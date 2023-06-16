<script setup>
const richTextValue = ref('<div style="color: red;">hello, tiptap</div>');
</script>

<template>
  <div>
    system-config

    {{ richTextValue }}
    <v-divider />
    <RichTextEditor v-model="richTextValue" />
  </div>
</template>

<style></style>
