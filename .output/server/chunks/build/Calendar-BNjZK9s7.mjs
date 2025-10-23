import { defineComponent, createElementBlock, openBlock, createElementVNode, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    as: { type: String, default: "div" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({ class: "ui-card__header" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Card/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-cf2d48f2"]]), { __name: "UiCardHeader" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    as: { type: String, default: "h2" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({ class: "ui-card__title" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Card/Title.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$2, { __name: "UiCardTitle" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Text",
  __ssrInlineRender: true,
  props: {
    as: { type: String, default: "p" },
    truncate: { type: Boolean, default: false }
    // true -> 4 строки
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        class: ["ui-card__text", { "ui-card__text--truncated": __props.truncate }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Card/Text.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-7ae2afc8"]]), { __name: "UiCardText" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-d6c365c6></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Spinner/Spinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d6c365c6"]]), { __name: "UiSpinner" });
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "17",
  height: "18",
  fill: "none"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#BEC2DA",
      d: "M4.792 3.75a.63.63 0 0 1-.625-.625v-2.5A.63.63 0 0 1 4.792 0a.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625M11.458 3.75a.63.63 0 0 1-.625-.625v-2.5A.63.63 0 0 1 11.458 0a.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625M5.208 11.042a.8.8 0 0 1-.316-.067.9.9 0 0 1-.275-.175.86.86 0 0 1-.242-.592.8.8 0 0 1 .067-.316q.062-.15.175-.275a.9.9 0 0 1 .275-.175.85.85 0 0 1 .908.175c.15.158.242.375.242.591 0 .05-.009.109-.017.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.042-.067.083-.1.125a.88.88 0 0 1-.592.242M8.125 11.042a.8.8 0 0 1-.317-.067.9.9 0 0 1-.275-.175.86.86 0 0 1-.241-.592.8.8 0 0 1 .066-.316q.063-.15.175-.275a.9.9 0 0 1 .275-.175.84.84 0 0 1 .909.175c.15.158.241.375.241.591 0 .05-.008.109-.016.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.042-.067.083-.1.125a.88.88 0 0 1-.592.242M11.042 11.042a.8.8 0 0 1-.317-.067.9.9 0 0 1-.275-.175l-.1-.125a.6.6 0 0 1-.075-.15.5.5 0 0 1-.05-.15c-.008-.058-.017-.117-.017-.167 0-.216.092-.433.242-.591a.9.9 0 0 1 .275-.175.83.83 0 0 1 .908.175c.15.158.242.375.242.591 0 .05-.008.109-.017.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.042-.066.083-.1.125a.88.88 0 0 1-.591.242M5.208 13.958a.8.8 0 0 1-.316-.066 1 1 0 0 1-.275-.175.88.88 0 0 1-.242-.592.8.8 0 0 1 .067-.317q.062-.162.175-.275c.308-.308.875-.308 1.183 0 .15.159.242.375.242.592a.88.88 0 0 1-.242.592.88.88 0 0 1-.592.241M8.125 13.958a.88.88 0 0 1-.592-.241.88.88 0 0 1-.241-.592.8.8 0 0 1 .066-.317q.063-.162.175-.275c.309-.308.875-.308 1.184 0a.8.8 0 0 1 .175.275.8.8 0 0 1 .066.317.88.88 0 0 1-.241.592.88.88 0 0 1-.592.241M11.042 13.958a.88.88 0 0 1-.592-.241.8.8 0 0 1-.175-.275.8.8 0 0 1-.067-.317c0-.108.025-.217.067-.317q.063-.162.175-.275a.83.83 0 0 1 .908-.175q.075.026.15.075c.042.025.084.067.125.1.15.159.242.375.242.592a.88.88 0 0 1-.242.592.88.88 0 0 1-.591.241M15.208 7.158H1.042a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h14.166a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"
    }, null, -1),
    createElementVNode("path", {
      fill: "#BEC2DA",
      d: "M11.458 17.917H4.792C1.75 17.917 0 16.167 0 13.125V6.042C0 3 1.75 1.25 4.792 1.25h6.666C14.5 1.25 16.25 3 16.25 6.042v7.083c0 3.042-1.75 4.792-4.792 4.792M4.792 2.5C2.408 2.5 1.25 3.658 1.25 6.042v7.083c0 2.383 1.158 3.542 3.542 3.542h6.666c2.384 0 3.542-1.159 3.542-3.542V6.042C15 3.658 13.842 2.5 11.458 2.5z"
    }, null, -1)
  ])]);
}
const Calendar = { render };

export { Calendar as C, __nuxt_component_3 as _, __nuxt_component_4 as a, __nuxt_component_5 as b, __nuxt_component_2 as c };
//# sourceMappingURL=Calendar-BNjZK9s7.mjs.map
