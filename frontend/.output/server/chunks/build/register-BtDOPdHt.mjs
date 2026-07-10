import { _ as __nuxt_component_0 } from './nuxt-link-DsdwT6f6.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const phone = ref("");
    const password = ref("");
    const loading = ref(false);
    const errorMsg = ref("");
    useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen bg-brand-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans",
        dir: "rtl"
      }, _attrs))}><div class="sm:mx-auto sm:w-full sm:max-w-md"><h2 class="mt-6 text-center text-3xl font-black text-brand-black uppercase">\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F</h2><p class="mt-2 text-center text-sm text-gray-600"> \u0623\u0648 `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "font-bold text-brand-red hover:text-red-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628`);
          } else {
            return [
              createTextVNode("\u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644</label><div class="mt-1"><input id="name"${ssrRenderAttr("value", unref(name))} name="name" type="text" autocomplete="name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-right" placeholder="\u0623\u062F\u062E\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0631\u064A\u0645"></div></div><div><label for="phone" class="block text-sm font-medium text-gray-700">\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641</label><div class="mt-1"><input id="phone"${ssrRenderAttr("value", unref(phone))} name="phone" type="tel" autocomplete="tel" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr" placeholder="01xxxxxxxxx"></div></div><div><label for="password" class="block text-sm font-medium text-gray-700">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</label><div class="mt-1"><input id="password"${ssrRenderAttr("value", unref(password))} name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr"></div></div>`);
      if (unref(errorMsg)) {
        _push(`<div class="p-3 rounded bg-red-50 text-red-600 text-sm font-medium">${ssrInterpolate(unref(errorMsg))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-black transition-colors disabled:opacity-50">${ssrInterpolate(unref(loading) ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0646\u0634\u0627\u0621..." : "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628")}</button></div></form></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BtDOPdHt.mjs.map
