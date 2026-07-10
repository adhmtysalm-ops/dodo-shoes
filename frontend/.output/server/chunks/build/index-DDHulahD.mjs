import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { Plus } from 'lucide-vue-next';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useAuth } from './useAuth-DY1eECjO.mjs';
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
    useAuth();
    const { data: products, pending, error, refresh } = useFetch(
      `${config.public.apiUrl}/api/products`,
      "$cj8pfGWyLr"
      /* nuxt-injected */
    );
    const isModalOpen = ref(false);
    const isEditing = ref(false);
    const saving = ref(false);
    const form = ref({ id: null, name: "", description: "", price: 0, stock: 0 });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "space-y-8",
        dir: "rtl"
      }, _attrs))}><div class="flex justify-between items-center"><h1 class="text-3xl font-bold tracking-tight">\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A</h1><button class="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center">`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 ml-2" }, null, _parent));
      _push(` \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C </button></div><div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">`);
      if (unref(pending)) {
        _push(`<div class="p-8 text-center text-sm text-gray-500">\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A...</div>`);
      } else if (unref(error)) {
        _push(`<div class="p-8 text-center text-sm text-red-500">\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A.</div>`);
      } else {
        _push(`<table class="w-full text-sm text-right"><thead class="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200"><tr><th class="px-6 py-4 font-medium">\u0627\u0644\u0645\u0646\u062A\u062C</th><th class="px-6 py-4 font-medium">\u0627\u0644\u0633\u0639\u0631</th><th class="px-6 py-4 font-medium">\u0627\u0644\u0645\u062E\u0632\u0648\u0646</th><th class="px-6 py-4 font-medium text-left">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(`<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors"><td class="px-6 py-4 font-medium text-gray-900 flex items-center space-x-3 space-x-reverse"><div class="w-10 h-10 bg-gray-100 rounded bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=100&q=80')" })}"></div><span>${ssrInterpolate(product.name)}</span></td><td class="px-6 py-4">$${ssrInterpolate(product.price)}</td><td class="px-6 py-4">${ssrInterpolate(product.stock)}</td><td class="px-6 py-4 text-left space-x-2 space-x-reverse"><button class="text-blue-500 hover:text-blue-700 font-medium">\u062A\u0639\u062F\u064A\u0644</button><button class="text-red-500 hover:text-red-700 font-medium">\u062D\u0630\u0641</button></td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(products) || unref(products).length === 0) {
          _push(`<tr><td colspan="4" class="px-6 py-8 text-center text-gray-500">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u062D\u0627\u0644\u064A\u0627\u064B.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table>`);
      }
      _push(`</div>`);
      if (unref(isModalOpen)) {
        _push(`<div class="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"><div class="bg-white rounded-xl shadow-xl w-full max-w-md p-6"><h2 class="text-xl font-bold mb-4">${ssrInterpolate(unref(isEditing) ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0646\u062A\u062C" : "\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F")}</h2><form class="space-y-4"><div><label class="block text-sm font-medium mb-1">\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C</label><input${ssrRenderAttr("value", unref(form).name)} required type="text" class="w-full px-3 py-2 border rounded-md"></div><div><label class="block text-sm font-medium mb-1">\u0627\u0644\u0648\u0635\u0641</label><textarea class="w-full px-3 py-2 border rounded-md">${ssrInterpolate(unref(form).description)}</textarea></div><div class="grid grid-cols-2 gap-4"><div><label class="block text-sm font-medium mb-1">\u0627\u0644\u0633\u0639\u0631</label><input${ssrRenderAttr("value", unref(form).price)} required type="number" step="0.01" class="w-full px-3 py-2 border rounded-md"></div><div><label class="block text-sm font-medium mb-1">\u0627\u0644\u0645\u062E\u0632\u0648\u0646</label><input${ssrRenderAttr("value", unref(form).stock)} required type="number" class="w-full px-3 py-2 border rounded-md"></div></div><div class="flex justify-end space-x-3 space-x-reverse mt-6"><button type="button" class="px-4 py-2 border rounded-md hover:bg-gray-50">\u0625\u0644\u063A\u0627\u0621</button><button type="submit"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">${ssrInterpolate(unref(saving) ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\u062D\u0641\u0638")}</button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DDHulahD.mjs.map
