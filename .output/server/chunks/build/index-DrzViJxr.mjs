import { a as __nuxt_component_1, d as __nuxt_component_1$2 } from './server.mjs';
import { defineComponent, withCtx, createVNode, defineAsyncComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./MaterialEditor-rLVacZeH.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead(() => ({
      title: "Создание материала"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = __nuxt_component_1;
      const _component_ClientOnly = __nuxt_component_1$2;
      const _component_LazyMaterialEditor = __nuxt_component_2_lazy;
      _push(ssrRenderComponent(_component_UiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(_component_LazyMaterialEditor, { material: {} })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create-material/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DrzViJxr.mjs.map
