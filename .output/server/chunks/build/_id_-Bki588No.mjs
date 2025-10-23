import { u as useRouter, a as __nuxt_component_1 } from './server.mjs';
import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { U as UseMaterial } from './UseMaterial-Cg4tTuec.mjs';
import { u as useHead } from './composables-Da3nHxgt.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const useMaterial = UseMaterial();
    const Router = useRouter();
    const material = ref(useMaterial.getMaterialById(parseInt(Router.currentRoute.value.params.id)));
    useHead(() => ({
      title: "Редактирование материала"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = __nuxt_component_1;
      const _component_WysiwygEditor = resolveComponent("WysiwygEditor");
      _push(ssrRenderComponent(_component_UiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WysiwygEditor, { modelValue: unref(material) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WysiwygEditor, { modelValue: unref(material) }, null, 8, ["modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/edit-material/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Bki588No.mjs.map
