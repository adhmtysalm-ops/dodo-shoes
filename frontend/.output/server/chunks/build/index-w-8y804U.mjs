import { _ as __nuxt_component_0 } from './nuxt-link-DsdwT6f6.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-Bno1Rc_O.mjs';
import '../nitro/nitro.mjs';
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
import 'unhead/plugins';
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { data: products, pending, error } = useFetch(
      `${config.public.apiUrl}/api/products`,
      "$Y4k-Zc-ZEL"
      /* nuxt-injected */
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: "rtl",
        class: "font-sans"
      }, _attrs))}><div class="relative bg-brand-gray overflow-hidden"><div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=2000" alt="Hero background" class="w-full h-full object-cover object-center"><div class="absolute inset-0 bg-black/40"></div></div><div class="relative max-w-7xl mx-auto px-6 py-32 sm:py-48 lg:py-56 flex flex-col items-start justify-center min-h-[80vh]"><h1 class="text-5xl md:text-8xl font-black text-brand-white uppercase tracking-tighter mb-6 max-w-3xl leading-none"> \u0623\u0637\u0644\u0642 \u0627\u0644\u0639\u0646\u0627\u0646 <br><span class="text-brand-red">\u0644\u0642\u062F\u0631\u0627\u062A\u0643</span></h1><p class="mt-4 text-xl text-gray-200 max-w-xl mb-10 font-medium"> \u0627\u062E\u062A\u0628\u0631 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u0642\u0627\u062F\u0645 \u0645\u0646 \u0627\u0644\u0623\u062D\u0630\u064A\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629. \u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0633\u0631\u0639\u0629 \u0648\u0627\u0644\u0623\u0628\u0637\u0627\u0644. </p><div class="flex flex-col sm:flex-row gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#shop",
        class: "bg-brand-white text-brand-black px-10 py-4 rounded-full font-bold uppercase hover:bg-gray-200 transition-colors text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0633\u0648\u0642 \u0627\u0644\u062A\u0634\u0643\u064A\u0644\u0629 `);
          } else {
            return [
              createTextVNode(" \u062A\u0633\u0648\u0642 \u0627\u0644\u062A\u0634\u0643\u064A\u0644\u0629 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "bg-transparent border-2 border-brand-white text-brand-white px-10 py-4 rounded-full font-bold uppercase hover:bg-white/10 transition-colors text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0634\u0627\u0647\u062F \u0627\u0644\u0641\u064A\u062F\u064A\u0648 `);
          } else {
            return [
              createTextVNode(" \u0634\u0627\u0647\u062F \u0627\u0644\u0641\u064A\u062F\u064A\u0648 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div id="shop" class="max-w-7xl mx-auto px-6 py-24"><div class="flex justify-between items-end mb-12"><h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight">\u0627\u0644\u0631\u0627\u0626\u062C \u0627\u0644\u0622\u0646</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hidden md:block font-bold hover:text-brand-red transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0639\u0631\u0636 \u0627\u0644\u0643\u0644`);
          } else {
            return [
              createTextVNode("\u0639\u0631\u0636 \u0627\u0644\u0643\u0644")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(pending)) {
        _push(`<div class="py-20 text-center font-bold">\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A...</div>`);
      } else if (unref(error)) {
        _push(`<div class="py-20 text-center text-brand-red font-bold">\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u0645\u064A\u0644</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: product.id,
            to: `/products/${product.id}`,
            class: "group block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-brand-gray aspect-square mb-4 overflow-hidden rounded-xl"${_scopeId}><img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;q=80&amp;w=800"${ssrRenderAttr("alt", product.name)} class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"${_scopeId}></div><div class="flex justify-between items-start"${_scopeId}><div${_scopeId}><h3 class="font-bold text-lg mb-1"${_scopeId}>${ssrInterpolate(product.name)}</h3><p class="text-gray-500 text-sm mb-2"${_scopeId}>\u0623\u062D\u0630\u064A\u0629 \u0631\u062C\u0627\u0644\u064A\u0629</p></div><p class="font-medium"${_scopeId}>$${ssrInterpolate(product.price)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-brand-gray aspect-square mb-4 overflow-hidden rounded-xl" }, [
                    createVNode("img", {
                      src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800",
                      alt: product.name,
                      class: "object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    }, null, 8, ["alt"])
                  ]),
                  createVNode("div", { class: "flex justify-between items-start" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-bold text-lg mb-1" }, toDisplayString(product.name), 1),
                      createVNode("p", { class: "text-gray-500 text-sm mb-2" }, "\u0623\u062D\u0630\u064A\u0629 \u0631\u062C\u0627\u0644\u064A\u0629")
                    ]),
                    createVNode("p", { class: "font-medium" }, "$" + toDisplayString(product.price), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-w-8y804U.mjs.map
