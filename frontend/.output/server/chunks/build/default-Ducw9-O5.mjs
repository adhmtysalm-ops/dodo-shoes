import { _ as __nuxt_component_0 } from './nuxt-link-DsdwT6f6.mjs';
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { Search, ShoppingBag } from 'lucide-vue-next';
import { u as useCart } from './useCart-CnZtZQ6f.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { cart } = useCart();
    const cartCount = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col font-sans" }, _attrs))}><div class="bg-brand-gray text-center py-2 text-xs font-medium tracking-wide"> Free Delivery &amp; Returns on all Orders </div><header class="border-b sticky top-0 bg-brand-white z-50"><div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "font-black text-2xl tracking-tighter uppercase italic"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` DODO `);
          } else {
            return [
              createTextVNode(" DODO ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex space-x-8 font-bold text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-brand-red transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`New &amp; Featured`);
          } else {
            return [
              createTextVNode("New & Featured")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-brand-red transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Men`);
          } else {
            return [
              createTextVNode("Men")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-brand-red transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Women`);
          } else {
            return [
              createTextVNode("Women")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-brand-red transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kids`);
          } else {
            return [
              createTextVNode("Kids")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "text-gray-400 hover:text-black transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Admin Dashboard`);
          } else {
            return [
              createTextVNode("Admin Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex items-center space-x-6"><button class="hover:text-brand-red transition-colors">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-6 h-6" }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "hover:text-brand-red transition-colors relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShoppingBag), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            if (cartCount.value > 0) {
              _push2(`<span class="absolute -top-1 -right-2 bg-brand-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"${_scopeId}>${ssrInterpolate(cartCount.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(ShoppingBag), { class: "w-6 h-6" }),
              cartCount.value > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute -top-1 -right-2 bg-brand-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
              }, toDisplayString(cartCount.value), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-brand-black text-brand-white pt-16 pb-8"><div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8"><div><h3 class="font-bold uppercase tracking-wider mb-4">Find a Store</h3><ul class="space-y-2 text-sm text-gray-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Become a Member`);
          } else {
            return [
              createTextVNode("Become a Member")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign Up for Email`);
          } else {
            return [
              createTextVNode("Sign Up for Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Send Us Feedback`);
          } else {
            return [
              createTextVNode("Send Us Feedback")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="font-bold uppercase tracking-wider mb-4">Get Help</h3><ul class="space-y-2 text-sm text-gray-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Order Status`);
          } else {
            return [
              createTextVNode("Order Status")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delivery`);
          } else {
            return [
              createTextVNode("Delivery")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Returns`);
          } else {
            return [
              createTextVNode("Returns")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Payment Options`);
          } else {
            return [
              createTextVNode("Payment Options")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="font-bold uppercase tracking-wider mb-4">About DODO</h3><ul class="space-y-2 text-sm text-gray-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`News`);
          } else {
            return [
              createTextVNode("News")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Careers`);
          } else {
            return [
              createTextVNode("Careers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Investors`);
          } else {
            return [
              createTextVNode("Investors")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} DODO, Inc. All Rights Reserved</p><div class="flex space-x-6 mt-4 md:mt-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Guides`);
          } else {
            return [
              createTextVNode("Guides")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Sale`);
          } else {
            return [
              createTextVNode("Terms of Sale")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Use`);
          } else {
            return [
              createTextVNode("Terms of Use")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`DODO Privacy Policy`);
          } else {
            return [
              createTextVNode("DODO Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Ducw9-O5.mjs.map
