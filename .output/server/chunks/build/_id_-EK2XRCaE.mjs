import { _ as _export_sfc, u as useRouter, a as __nuxt_component_1, c as __nuxt_component_0 } from './server.mjs';
import { c as __nuxt_component_2, _ as __nuxt_component_3, C as Calendar, a as __nuxt_component_4, b as __nuxt_component_5 } from './Calendar-BNjZK9s7.mjs';
import { defineComponent, ref, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { U as UseMaterial, a as Utilities } from './UseMaterial-Cg4tTuec.mjs';
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
    const { convertDate } = Utilities();
    useRouter();
    UseMaterial();
    const material = ref(null);
    const isFetching = ref(true);
    useHead(() => ({
      title: material.value?.title ?? "Материал"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = __nuxt_component_1;
      const _component_UiCard = __nuxt_component_0;
      const _component_UiSpinner = __nuxt_component_2;
      const _component_UiCardHeader = __nuxt_component_3;
      const _component_UiCardTitle = __nuxt_component_4;
      const _component_UiCardText = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCard, { hover: false }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(isFetching)) {
                    _push3(`<div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-dc0cf22b${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSpinner, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (unref(material)) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_UiCardHeader, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Calendar), { class: "icon" }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(unref(convertDate)(unref(material).createdAt))}`);
                        } else {
                          return [
                            createVNode(unref(Calendar), { class: "icon" }),
                            createTextVNode(" " + toDisplayString(unref(convertDate)(unref(material).createdAt)), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardTitle, { as: "h1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(material).title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(material).title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardText, { style: { "font-weight": "500" } }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(material).description)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(material).description), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div data-v-dc0cf22b${_scopeId2}>${unref(material).html ?? ""}</div><!--]-->`);
                  } else {
                    _push3(`<div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-dc0cf22b${_scopeId2}><h1 data-v-dc0cf22b${_scopeId2}> Ой! Похоже такого нет... </h1><p data-v-dc0cf22b${_scopeId2}> Извините, но запрашиваемая вами материал не существует. </p></div>`);
                  }
                } else {
                  return [
                    unref(isFetching) ? (openBlock(), createBlock("div", {
                      key: 0,
                      style: { "text-align": "center" }
                    }, [
                      createVNode(_component_UiSpinner)
                    ])) : unref(material) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_UiCardHeader, null, {
                        default: withCtx(() => [
                          createVNode(unref(Calendar), { class: "icon" }),
                          createTextVNode(" " + toDisplayString(unref(convertDate)(unref(material).createdAt)), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCardTitle, { as: "h1" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(material).title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCardText, { style: { "font-weight": "500" } }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(material).description), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        innerHTML: unref(material).html
                      }, null, 8, ["innerHTML"])
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 2,
                      style: { "text-align": "center" }
                    }, [
                      createVNode("h1", null, " Ой! Похоже такого нет... "),
                      createVNode("p", null, " Извините, но запрашиваемая вами материал не существует. ")
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCard, { hover: false }, {
                default: withCtx(() => [
                  unref(isFetching) ? (openBlock(), createBlock("div", {
                    key: 0,
                    style: { "text-align": "center" }
                  }, [
                    createVNode(_component_UiSpinner)
                  ])) : unref(material) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(_component_UiCardHeader, null, {
                      default: withCtx(() => [
                        createVNode(unref(Calendar), { class: "icon" }),
                        createTextVNode(" " + toDisplayString(unref(convertDate)(unref(material).createdAt)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardTitle, { as: "h1" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(material).title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardText, { style: { "font-weight": "500" } }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(material).description), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", {
                      innerHTML: unref(material).html
                    }, null, 8, ["innerHTML"])
                  ], 64)) : (openBlock(), createBlock("div", {
                    key: 2,
                    style: { "text-align": "center" }
                  }, [
                    createVNode("h1", null, " Ой! Похоже такого нет... "),
                    createVNode("p", null, " Извините, но запрашиваемая вами материал не существует. ")
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/material/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc0cf22b"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-EK2XRCaE.mjs.map
