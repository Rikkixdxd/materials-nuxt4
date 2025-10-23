import { c as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, withDirectives, createBlock, createCommentVNode, vModelText, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { U as UseMaterial, a as Utilities } from './UseMaterial-Cg4tTuec.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MaterialEditor",
  __ssrInlineRender: true,
  props: {
    material: {}
  },
  setup(__props) {
    const props = __props;
    const editorElement = ref(null);
    const useMaterial = UseMaterial();
    const titleError = ref(null);
    const descriptionError = ref(null);
    const { validateTextLength } = Utilities();
    const validateTitle = () => {
      if (!props.material.title) {
        titleError.value = "Заголовок не может быть пустым";
        return;
      }
      const value = props.material.title;
      if (!validateTextLength(value, 5, 80)) {
        titleError.value = "Заголовок должен быть от 5 до 80 символов";
      } else {
        titleError.value = null;
      }
    };
    const validateDescription = () => {
      if (!props.material.description) {
        descriptionError.value = null;
        return;
      }
      const value = props.material.description;
      if (!validateTextLength(value, 0, 255)) {
        descriptionError.value = "Описание должно быть не длиннее 255 символов";
      } else {
        descriptionError.value = null;
      }
    };
    useMaterial.editingMaterial = props.material;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({
        class: "wysiwyg-editor",
        hover: false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="wysiwyg-editor__header"${_scopeId}><input id="title"${ssrRenderAttr("value", __props.material.title)} type="text" placeholder="Введите заголовок" class="${ssrRenderClass([{ "wysiwyg-editor__input--error": unref(titleError) }, "wysiwyg-editor__title"])}"${_scopeId}>`);
            if (unref(titleError)) {
              _push2(`<label class="wysiwyg-editor__error" for="title"${_scopeId}>${ssrInterpolate(unref(titleError))}</label>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<textarea id="description" placeholder="Введите краткое описание..." rows="2" class="${ssrRenderClass([{ "wysiwyg-editor__input--error": unref(descriptionError) }, "wysiwyg-editor__description-input"])}"${_scopeId}>${ssrInterpolate(__props.material.description)}</textarea>`);
            if (unref(descriptionError)) {
              _push2(`<label class="wysiwyg-editor__error" for="description"${_scopeId}>${ssrInterpolate(unref(descriptionError))}</label>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div id="editorjs"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "wysiwyg-editor__header" }, [
                withDirectives(createVNode("input", {
                  id: "title",
                  "onUpdate:modelValue": ($event) => __props.material.title = $event,
                  type: "text",
                  class: ["wysiwyg-editor__title", { "wysiwyg-editor__input--error": unref(titleError) }],
                  placeholder: "Введите заголовок",
                  onBlur: validateTitle
                }, null, 42, ["onUpdate:modelValue"]), [
                  [vModelText, __props.material.title]
                ]),
                unref(titleError) ? (openBlock(), createBlock("label", {
                  key: 0,
                  class: "wysiwyg-editor__error",
                  for: "title"
                }, toDisplayString(unref(titleError)), 1)) : createCommentVNode("", true),
                withDirectives(createVNode("textarea", {
                  id: "description",
                  "onUpdate:modelValue": ($event) => __props.material.description = $event,
                  class: ["wysiwyg-editor__description-input", { "wysiwyg-editor__input--error": unref(descriptionError) }],
                  placeholder: "Введите краткое описание...",
                  rows: "2",
                  onBlur: validateDescription
                }, null, 42, ["onUpdate:modelValue"]), [
                  [vModelText, __props.material.description]
                ]),
                unref(descriptionError) ? (openBlock(), createBlock("label", {
                  key: 1,
                  class: "wysiwyg-editor__error",
                  for: "description"
                }, toDisplayString(unref(descriptionError)), 1)) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                id: "editorjs",
                ref_key: "editorElement",
                ref: editorElement
              }, null, 512)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/MaterialEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MaterialEditor = Object.assign(_sfc_main, { __name: "MaterialEditor" });

export { MaterialEditor as default };
//# sourceMappingURL=MaterialEditor-rLVacZeH.mjs.map
