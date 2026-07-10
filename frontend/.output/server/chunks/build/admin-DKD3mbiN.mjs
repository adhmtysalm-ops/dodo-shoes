import { _ as __nuxt_component_0 } from './nuxt-link-DsdwT6f6.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-DY1eECjO.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import './fetch-Bno1Rc_O.mjs';
import '@vue/shared';
import 'perfect-debounce';

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
            _push2(`Storefront \u2197`);
          } else {
            return [
              createTextVNode("Storefront \u2197")
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

export { _sfc_main as default };
//# sourceMappingURL=admin-DKD3mbiN.mjs.map
