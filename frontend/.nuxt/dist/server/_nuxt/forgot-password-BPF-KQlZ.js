import { _ as __nuxt_component_0 } from "./nuxt-link-DsdwT6f6.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useAuth } from "./useAuth-DY1eECjO.js";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/hookable/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/unctx/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/defu/dist/defu.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/destr/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ohash/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/klona/dist/index.mjs";
import "./fetch-Bno1Rc_O.js";
import "@vue/shared";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const phone = ref("");
    const loading = ref(false);
    const success = ref(false);
    const errorMsg = ref("");
    useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen bg-brand-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans",
        dir: "rtl"
      }, _attrs))}><div class="sm:mx-auto sm:w-full sm:max-w-md"><h2 class="mt-6 text-center text-3xl font-black text-brand-black uppercase">استعادة كلمة المرور</h2><p class="mt-2 text-center text-sm text-gray-600"> أدخل رقم هاتفك وسنرسل لك رمز التحقق </p></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">`);
      if (!unref(success)) {
        _push(`<form class="space-y-6"><div><label for="phone" class="block text-sm font-medium text-gray-700">رقم الهاتف</label><div class="mt-1"><input id="phone"${ssrRenderAttr("value", unref(phone))} name="phone" type="tel" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr" placeholder="01xxxxxxxxx"></div></div>`);
        if (unref(errorMsg)) {
          _push(`<div class="p-3 rounded bg-red-50 text-red-600 text-sm font-medium">${ssrInterpolate(unref(errorMsg))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-black transition-colors disabled:opacity-50">${ssrInterpolate(unref(loading) ? "جاري الإرسال..." : "إرسال الرمز")}</button></div><div class="mt-4 text-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "text-sm font-medium text-brand-red hover:text-red-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`العودة لتسجيل الدخول`);
            } else {
              return [
                createTextVNode("العودة لتسجيل الدخول")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></form>`);
      } else {
        _push(`<div class="text-center space-y-4"><div class="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><h3 class="text-lg font-bold text-gray-900">تم الإرسال بنجاح!</h3><p class="text-sm text-gray-500">تم إرسال رابط استعادة كلمة المرور إلى هاتفك في رسالة نصية.</p><div class="mt-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-black hover:bg-gray-800 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` العودة لتسجيل الدخول `);
            } else {
              return [
                createTextVNode(" العودة لتسجيل الدخول ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=forgot-password-BPF-KQlZ.js.map
