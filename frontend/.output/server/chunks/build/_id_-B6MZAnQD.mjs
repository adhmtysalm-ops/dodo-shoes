import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useCart } from './useCart-CnZtZQ6f.mjs';
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
import '@vue/shared';
import 'perfect-debounce';

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
        _push(`<div class="py-20 text-center font-bold">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</div>`);
      } else if (unref(error) || !unref(product)) {
        _push(`<div class="py-20 text-center text-brand-red font-bold">\u0627\u0644\u0645\u0646\u062A\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F</div>`);
      } else {
        _push(`<div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12"><div class="bg-gray-100 aspect-square rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"${ssrRenderAttr("alt", unref(product).name)} class="object-cover w-full h-full"></div><div class="flex flex-col justify-center"><h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">${ssrInterpolate(unref(product).name)}</h1><p class="text-2xl font-medium mb-6">$${ssrInterpolate(unref(product).price)}</p><p class="text-gray-600 mb-8 max-w-md leading-relaxed">${ssrInterpolate(unref(product).description || "\u0627\u0644\u0631\u0641\u064A\u0642 \u0627\u0644\u0645\u062B\u0627\u0644\u064A \u0644\u062C\u0631\u064A\u0627\u062A\u0643 \u0627\u0644\u064A\u0648\u0645\u064A\u0629. \u0645\u0635\u0645\u0645 \u0644\u062A\u062D\u0642\u064A\u0642 \u0623\u0642\u0635\u0649 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0633\u0631\u0639\u0629 \u0648\u0627\u0644\u0631\u0627\u062D\u0629 \u0641\u064A \u0643\u0644 \u062E\u0637\u0648\u0629.")}</p><div class="space-y-4"><button class="w-full bg-brand-black text-brand-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors"> \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u062D\u0642\u064A\u0628\u0629 </button><button class="w-full bg-gray-100 text-brand-black py-4 rounded-full font-bold uppercase hover:bg-gray-200 transition-colors"> \u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0645\u0641\u0636\u0644\u0629 </button></div></div></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-B6MZAnQD.mjs.map
