import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useRuntimeConfig } from "../server.mjs";
import { u as useCart } from "./useCart-CnZtZQ6f.js";
import { u as useFetch } from "./fetch-Bno1Rc_O.js";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/hookable/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/unctx/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/h3/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/defu/dist/defu.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ufo/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const config = useRuntimeConfig();
    useCart();
    const { data: product, pending, error } = useFetch(
      `${config.public.apiUrl}/api/products/${route.params.id}`,
      "$R9Qj7UqsJd"
      /* nuxt-injected */
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: "rtl",
        class: "font-sans"
      }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<div class="py-20 text-center font-bold">جاري التحميل...</div>`);
      } else if (unref(error) || !unref(product)) {
        _push(`<div class="py-20 text-center text-brand-red font-bold">المنتج غير موجود</div>`);
      } else {
        _push(`<div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12"><div class="bg-gray-100 aspect-square rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"${ssrRenderAttr("alt", unref(product).name)} class="object-cover w-full h-full"></div><div class="flex flex-col justify-center"><h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">${ssrInterpolate(unref(product).name)}</h1><p class="text-2xl font-medium mb-6">$${ssrInterpolate(unref(product).price)}</p><p class="text-gray-600 mb-8 max-w-md leading-relaxed">${ssrInterpolate(unref(product).description || "الرفيق المثالي لجرياتك اليومية. مصمم لتحقيق أقصى درجات السرعة والراحة في كل خطوة.")}</p><div class="space-y-4"><button class="w-full bg-brand-black text-brand-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors"> إضافة إلى الحقيبة </button><button class="w-full bg-gray-100 text-brand-black py-4 rounded-full font-bold uppercase hover:bg-gray-200 transition-colors"> إضافة للمفضلة </button></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-B6MZAnQD.js.map
