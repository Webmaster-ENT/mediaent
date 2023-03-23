<script setup>
import { ref, watch } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { component as CKEditor } from "@ckeditor/ckeditor5-vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const editorData = ref(props.modelValue || "");
const editorConfig = ref({
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
  ],
  fontSize: {
    options: [9, 11, 13, "default", 17, 19, 21, 27, 35],
    supportAllValues: false,
  },
  plugins: ["Essentials", "Paragraph", "Heading", "List", "Bold", "Italic"],
  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph",
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
    ],
  },
});

watch(editorData, () => {
  emit("update:modelValue", editorData.value);
});
</script>

<template>
  <div class="fg-block" style="--ck-border-radius: 0.5rem">
    <CKEditor :editor="ClassicEditor" v-model="editorData" />
  </div>
</template>

<style>
.ck-editor_editable {
  min-height: 520px;
}
</style>
