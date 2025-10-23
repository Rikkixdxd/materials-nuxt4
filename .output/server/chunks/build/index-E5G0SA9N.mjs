import { _ as _export_sfc, a as __nuxt_component_1$1, b as __nuxt_component_2$1, c as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_3, C as Calendar, a as __nuxt_component_4, b as __nuxt_component_5, c as __nuxt_component_2 } from './Calendar-BNjZK9s7.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Grid",
  __ssrInlineRender: true,
  props: {
    columns: {
      type: Object,
      default: 3
    },
    gap: { type: Number, default: 20 }
  },
  setup(__props) {
    const props = __props;
    const gridStyles = computed(() => {
      return `gap: ${props.gap}px;`;
    });
    const gridClasses = computed(() => {
      const classes = [];
      const cols = props.columns;
      if (cols.mobile) classes.push(`ui-grid--cols-mobile-${cols.mobile}`);
      if (cols.tablet) classes.push(`ui-grid--cols-tablet-${cols.tablet}`);
      if (cols.desktop) classes.push(`ui-grid--cols-desktop-${cols.desktop}`);
      return classes.join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["ui-grid", unref(gridClasses)],
        style: unref(gridStyles)
      }, _attrs))} data-v-40bcfa30>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Grid/Grid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-40bcfa30"]]), { __name: "UiGrid" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead(() => ({
      title: "Материалы"
    }));
    const { convertDate } = Utilities();
    const useMaterial = UseMaterial();
    const isFetching = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = __nuxt_component_1$1;
      const _component_UiGrid = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_UiCard = __nuxt_component_0;
      const _component_UiCardHeader = __nuxt_component_3;
      const _component_UiCardTitle = __nuxt_component_4;
      const _component_UiCardText = __nuxt_component_5;
      const _component_UiSpinner = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(useMaterial).materials.length) {
              _push2(ssrRenderComponent(_component_UiGrid, {
                columns: { mobile: 1, tablet: 3, desktop: 4 },
                gap: 40
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(useMaterial).materials, (material) => {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        key: material.id,
                        to: `/material/${material.id}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiCard, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UiCardHeader, { class: "header" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(Calendar), { class: "icon" }, null, _parent6, _scopeId5));
                                        _push6(`${ssrInterpolate(unref(convertDate)(material.createdAt))}`);
                                      } else {
                                        return [
                                          createVNode(unref(Calendar), { class: "icon" }),
                                          createTextVNode(toDisplayString(unref(convertDate)(material.createdAt)), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UiCardTitle, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(material.title)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(material.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  if (material.description) {
                                    _push5(ssrRenderComponent(_component_UiCardText, {
                                      class: "text",
                                      truncate: true
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(material.description)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(material.description), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                } else {
                                  return [
                                    createVNode(_component_UiCardHeader, { class: "header" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Calendar), { class: "icon" }),
                                        createTextVNode(toDisplayString(unref(convertDate)(material.createdAt)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(material.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    material.description ? (openBlock(), createBlock(_component_UiCardText, {
                                      key: 0,
                                      class: "text",
                                      truncate: true
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(material.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiCard, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCardHeader, { class: "header" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Calendar), { class: "icon" }),
                                      createTextVNode(toDisplayString(unref(convertDate)(material.createdAt)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(material.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  material.description ? (openBlock(), createBlock(_component_UiCardText, {
                                    key: 0,
                                    class: "text",
                                    truncate: true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(material.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(useMaterial).materials, (material) => {
                        return openBlock(), createBlock(_component_NuxtLink, {
                          key: material.id,
                          to: `/material/${material.id}`
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCard, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiCardHeader, { class: "header" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Calendar), { class: "icon" }),
                                    createTextVNode(toDisplayString(unref(convertDate)(material.createdAt)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(material.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                material.description ? (openBlock(), createBlock(_component_UiCardText, {
                                  key: 0,
                                  class: "text",
                                  truncate: true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(material.description), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UiCard, {
                style: { "text-align": "center" },
                hover: false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(isFetching)) {
                      _push3(`<div data-v-8137768a${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UiSpinner, null, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<div data-v-8137768a${_scopeId2}> Тут пока ничего нет :(<br data-v-8137768a${_scopeId2}> Но вы можете добавить первый материал!<br data-v-8137768a${_scopeId2}> Используйте кнопку &quot;Создать материал&quot; в правом верхнем углу. </div>`);
                    }
                  } else {
                    return [
                      unref(isFetching) ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(_component_UiSpinner)
                      ])) : (openBlock(), createBlock("div", { key: 1 }, [
                        createTextVNode(" Тут пока ничего нет :("),
                        createVNode("br"),
                        createTextVNode(" Но вы можете добавить первый материал!"),
                        createVNode("br"),
                        createTextVNode(' Используйте кнопку "Создать материал" в правом верхнем углу. ')
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              unref(useMaterial).materials.length ? (openBlock(), createBlock(_component_UiGrid, {
                key: 0,
                columns: { mobile: 1, tablet: 3, desktop: 4 },
                gap: 40
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(useMaterial).materials, (material) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      key: material.id,
                      to: `/material/${material.id}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCard, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardHeader, { class: "header" }, {
                              default: withCtx(() => [
                                createVNode(unref(Calendar), { class: "icon" }),
                                createTextVNode(toDisplayString(unref(convertDate)(material.createdAt)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(material.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            material.description ? (openBlock(), createBlock(_component_UiCardText, {
                              key: 0,
                              class: "text",
                              truncate: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(material.description), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_UiCard, {
                key: 1,
                style: { "text-align": "center" },
                hover: false
              }, {
                default: withCtx(() => [
                  unref(isFetching) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_UiSpinner)
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createTextVNode(" Тут пока ничего нет :("),
                    createVNode("br"),
                    createTextVNode(" Но вы можете добавить первый материал!"),
                    createVNode("br"),
                    createTextVNode(' Используйте кнопку "Создать материал" в правом верхнем углу. ')
                  ]))
                ]),
                _: 1
              }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8137768a"]]);

export { index as default };
//# sourceMappingURL=index-E5G0SA9N.mjs.map
