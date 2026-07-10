import { _ as __nuxt_component_0 } from "./nuxt-link-DsdwT6f6.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { u as useAuth } from "./useAuth-DY1eECjO.js";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ufo/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/defu/dist/defu.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/h3/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/destr/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ohash/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/klona/dist/index.mjs";
import "./fetch-Bno1Rc_O.js";
import "@vue/shared";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/perfect-debounce/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/unctx/dist/index.mjs";
import "vue-router";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 font-sans" }, _attrs))}><header class="bg-white border-b sticky top-0 z-50"><div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between"><div class="flex items-center space-x-8"><div class="flex items-center space-x-2"><div class="w-6 h-6 bg-black rounded-full flex items-center justify-center"><span class="text-white text-xs font-bold">D</span></div><span class="font-medium text-sm">DODO Admin</span></div><nav class="hidden md:flex space-x-6 text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "text-gray-500 hover:text-black transition-colors",
        "exact-active-class": "text-black font-medium border-b-2 border-black pb-[18px] translate-y-[10px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Overview`);
          } else {
            return [
              createTextVNode("Overview")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products",
        class: "text-gray-500 hover:text-black transition-colors",
        "active-class": "text-black font-medium border-b-2 border-black pb-[18px] translate-y-[10px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products`);
          } else {
            return [
              createTextVNode("Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: "text-gray-500 hover:text-black transition-colors",
        "active-class": "text-black font-medium border-b-2 border-black pb-[18px] translate-y-[10px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Orders`);
          } else {
            return [
              createTextVNode("Orders")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-500 hover:text-black transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Storefront ↗`);
          } else {
            return [
              createTextVNode("Storefront ↗")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div></header><main class="max-w-7xl mx-auto px-4 py-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=admin-DKD3mbiN.js.map
