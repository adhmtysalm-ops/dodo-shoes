import { _ as __nuxt_component_0 } from "./nuxt-link-DsdwT6f6.js";
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useCart } from "./useCart-CnZtZQ6f.js";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/hookable/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/unctx/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/defu/dist/defu.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { cart } = useCart();
    const subtotal = computed(() => {
      return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-6 py-12" }, _attrs))}><h1 class="text-4xl font-black uppercase tracking-tight mb-10">Bag</h1>`);
      if (unref(cart).length === 0) {
        _push(`<div class="text-center py-20"><p class="text-gray-500 mb-6">There are no items in your bag.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "bg-brand-black text-brand-white px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Shop Now `);
            } else {
              return [
                createTextVNode(" Shop Now ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-12"><div class="lg:col-span-2 space-y-8"><!--[-->`);
        ssrRenderList(unref(cart), (item) => {
          _push(`<div class="flex gap-6 border-b pb-8"><div class="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;q=80&amp;w=400"${ssrRenderAttr("alt", item.name)} class="object-cover w-full h-full"></div><div class="flex-grow flex flex-col justify-between"><div class="flex justify-between"><div><h3 class="font-bold text-lg">${ssrInterpolate(item.name)}</h3><p class="text-gray-500 text-sm mb-1">Men&#39;s Shoes</p><p class="text-gray-500 text-sm mb-4">Size: 42</p></div><p class="font-medium">$${ssrInterpolate(item.price)}</p></div><div class="flex justify-between items-center"><div class="flex items-center space-x-4"><span class="text-gray-500">Quantity</span><select${ssrRenderAttr("value", item.quantity)} class="border-gray-300 rounded-md focus:ring-black focus:border-black p-1"><!--[-->`);
          ssrRenderList(10, (n) => {
            _push(`<option${ssrRenderAttr("value", n)}>${ssrInterpolate(n)}</option>`);
          });
          _push(`<!--]--></select></div><button class="text-gray-400 hover:text-brand-red underline text-sm transition-colors"> Remove </button></div></div></div>`);
        });
        _push(`<!--]--></div><div class="bg-gray-50 p-8 rounded-2xl h-fit"><h2 class="text-2xl font-bold mb-6">Summary</h2><div class="space-y-4 mb-6 text-sm"><div class="flex justify-between"><span class="text-gray-600">Subtotal</span><span>$${ssrInterpolate(subtotal.value.toFixed(2))}</span></div><div class="flex justify-between"><span class="text-gray-600">Estimated Delivery &amp; Handling</span><span>Free</span></div><div class="flex justify-between border-t pt-4 font-bold text-lg"><span>Total</span><span>$${ssrInterpolate(subtotal.value.toFixed(2))}</span></div></div><button class="w-full bg-brand-black text-brand-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors"> Guest Checkout </button><button class="w-full bg-gray-200 text-brand-black py-4 rounded-full font-bold uppercase hover:bg-gray-300 transition-colors mt-3"> Member Checkout </button></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BqlbBsnx.js.map
