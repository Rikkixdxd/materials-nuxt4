<template>
  <UiCard class="wysiwyg-editor" :hover="false">
    <div class="wysiwyg-editor__header">
      <input
        id="title"
        v-model="material.title"
        type="text"
        class="wysiwyg-editor__title"
        placeholder="Введите заголовок"
        @blur="validateTitle"
        :class="{ 'wysiwyg-editor__input--error': titleError }"
      />
      <label v-if="titleError" class="wysiwyg-editor__error" for="title">{{ titleError }}</label>
  
      <textarea
        id="description"
        v-model="material.description"
        class="wysiwyg-editor__description-input"
        placeholder="Введите краткое описание..."
        rows="2"
        @blur="validateDescription"
        :class="{ 'wysiwyg-editor__input--error': descriptionError }"
      />
      <label v-if="descriptionError" class="wysiwyg-editor__error" for="description">{{ descriptionError }}</label>
    </div>

    <div id="editorjs" ref="editorElement"></div>
  </UiCard>
</template>

<script setup lang="ts">
import EditorJS, {
  type EditorConfig,
} from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import type { Material } from "~/types/Material";
import { Utilities } from "~/composables/Utility";

const props = defineProps<{
  material: Material;
}>();
const editorElement = ref<HTMLElement | null>(null);
const useMaterial = UseMaterial();
let editor: EditorJS | null = null;
const titleError = ref<string | null>(null);
const descriptionError = ref<string | null>(null);

const { validateTextLength } = Utilities();

const validateTitle = () => {

  if(!props.material.title) {
    titleError.value = 'Заголовок не может быть пустым';
    return;
  }

  const value = props.material.title

  if (!validateTextLength(value, 5, 80)) {
    titleError.value = 'Заголовок должен быть от 5 до 80 символов';
  } else {
    titleError.value = null;
  }
};

const validateDescription = () => {

  if(!props.material.description) {
    descriptionError.value = null;
    return;
  }

  const value = props.material.description

  if (!validateTextLength(value, 0, 255)) {
    descriptionError.value = 'Описание должно быть не длиннее 255 символов';
  } else {
    descriptionError.value = null;
  }
};

const initEditor = () => {
  if (!editorElement.value) return;
  // @ts-ignore
  editor = new EditorJS({
    holder: "editorjs",
    placeholder: "Введите текст...",
    tools: {
      header: {
        // @ts-ignore
        class: Header,
        config: {
          placeholder: "Введите заголовок",
          levels: [1, 2, 3],
          defaultLevel: 2,
        },
        inlineToolbar: true,
      },
      paragraph: {
        // @ts-ignore
        class: Paragraph,
        inlineToolbar: true,
        config: {
          placeholder: "Введите текст...",
        },
      },
      quote: {
        // @ts-ignore
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: "Введите цитату",
          captionPlaceholder: "Автор цитаты",
        },
      },
    },
    
    onChange: async () => {
      if (editor) {
        const data = await editor.save();
        useMaterial.editingMaterial = { ...props.material, blocks: data.blocks, createdAt: data.time! };
      }
    },
    minHeight: 300,
  } as EditorConfig);
};

useMaterial.editingMaterial = props.material;

onMounted(() => {
  initEditor();
});

onBeforeUnmount(() => {
  if (editor) {
    editor.destroy();
    editor = null;
  }
});

</script>

<style lang="sass">
.wysiwyg-editor
  font-family: $font-family-base
  padding: 48px
  
  .ce-block__content
    max-width: 1000px

  .ce-toolbar__content
    max-width: 1000px

  .ce-block
    border: 1px dotted transparent

    &:hover
        border: 1px dotted #ccc
        border-radius: 4px

  .ce-header
    padding: 0
    padding-bottom: 1rem

  .ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before, .ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before
    color: $color-text-muted

  .ce-paragraph
    padding: 0

  &__title
    width: 100%
    border: none
    outline: none
    font-size: 36px
    font-weight: 600
    color: $color-text-muted
    background: transparent
    transition: color 0.2s
    font-family: $h-font-family
    padding: 0
    margin: 0 auto

    &::placeholder
      color: $color-text-muted

    &:focus
      color: #333

    &:not(:placeholder-shown)
      color: #333


  &__description-input
    width: 100%
    border: none
    outline: none
    font-size: 22px
    resize: vertical
    min-height: 50px
    font-family: inherit
    transition: color 0.2s
    padding: 0
    margin: 0 auto
    font-weight: 500

    @media(max-width: 768px)
      font-size: 18px

    &::placeholder
      color: $color-text-muted

  &__header
    max-width: 1000px
    margin: 0 auto
    width: 100%

  &__error
    color: red
    font-size: 16px
    display: block
  &__input--error
    border-bottom: 2px solid red !important
 
@media (max-width: 768px)
  .wysiwyg-editor
    padding: 16px

    &__title
      font-size: 24px
</style>
