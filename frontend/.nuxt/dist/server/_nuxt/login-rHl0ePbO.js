import { _ as __nuxt_component_0 } from "./nuxt-link-DsdwT6f6.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
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
      }, _attrs))}><div class="sm:mx-auto sm:w-full sm:max-w-md"><h2 class="mt-6 text-center text-3xl font-black text-brand-black uppercase">تسجيل الدخول لحسابك</h2><p class="mt-2 text-center text-sm text-gray-600"> أو `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "font-bold text-brand-red hover:text-red-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`قم بإنشاء حساب جديد`);
          } else {
            return [
              createTextVNode("قم بإنشاء حساب جديد")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"><form class="space-y-6"><div><label for="phone" class="block text-sm font-medium text-gray-700">رقم الهاتف</label><div class="mt-1"><input id="phone"${ssrRenderAttr("value", unref(phone))} name="phone" type="tel" autocomplete="tel" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr" placeholder="01xxxxxxxxx"></div></div><div><label for="password" class="block text-sm font-medium text-gray-700">كلمة المرور</label><div class="mt-1"><input id="password"${ssrRenderAttr("value", unref(password))} name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr"></div></div><div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"><label for="remember-me" class="mr-2 block text-sm text-gray-900">تذكرني</label></div><div class="text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/forgot-password",
        class: "font-bold text-brand-red hover:text-red-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`نسيت كلمة المرور؟`);
          } else {
            return [
              createTextVNode("نسيت كلمة المرور؟")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(errorMsg)) {
        _push(`<div class="p-3 rounded bg-red-50 text-red-600 text-sm font-medium">${ssrInterpolate(unref(errorMsg))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-black transition-colors disabled:opacity-50">${ssrInterpolate(unref(loading) ? "جاري الدخول..." : "تسجيل الدخول")}</button></div></form></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-rHl0ePbO.js.map
