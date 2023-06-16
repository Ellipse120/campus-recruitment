<script setup>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["input"]);

const editor = ref(null);

watch(
  () => props.value,
  (v) => {
    const isSame = editor.value.getHTML() === v;
    if (isSame) {
      return;
    }
    editor.value.commands.setContent(v, false);
  }
);

onMounted(() => {
  editor.value = new Editor({
    content: props.value.value,
    extensions: [StarterKit],
    onUpdate: () => {
      console.log(editor.value.getHTML());
      // HTML
      emit("input", editor.value.getHTML());

      // JSON
      // emit('input', editor.value.getJSON())
    },
  });
});

onBeforeUnmount(() => {
  editor.value.destroy();
});
</script>

<template>
  <ClientOnly>
    <EditorContent :editor="editor"></EditorContent>
  </ClientOnly>
</template>
