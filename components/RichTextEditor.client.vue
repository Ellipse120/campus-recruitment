<script setup>
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const editor = ref(null);

watch(
  () => props.modelValue,
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
    content: props.modelValue,
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "border m-4 prose prose-coolgray max-w-none dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
    injectCSS: false,
    onUpdate: () => {
      // HTML
      emit("update:modelValue", editor.value.getHTML());

      // JSON
      // emit('update:modelValue', editor.value.getJSON())
    },
  });
});

onBeforeUnmount(() => {
  editor.value.destroy();
});
</script>

<template>
  <EditorContent :editor="editor"></EditorContent>
</template>
