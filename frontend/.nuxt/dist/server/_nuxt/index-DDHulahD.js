import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Plus } from "lucide-vue-next";
import { u as useRuntimeConfig } from "../server.mjs";
import { u as useAuth } from "./useAuth-DY1eECjO.js";
import { u as useFetch } from "./fetch-Bno1Rc_O.js";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/hookable/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/unctx/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/defu/dist/defu.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ufo/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/destr/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ohash/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/klona/dist/index.mjs";
import "@vue/shared";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/perfect-debounce/dist/index.mjs";
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
      }, _attrs))}><div class="flex justify-between items-center"><h1 class="text-3xl font-bold tracking-tight">المنتجات</h1><button class="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center">`);
      _push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 ml-2" }, null, _parent));
      _push(` إضافة منتج </button></div><div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">`);
      if (unref(pending)) {
        _push(`<div class="p-8 text-center text-sm text-gray-500">جاري تحميل المنتجات...</div>`);
      } else if (unref(error)) {
        _push(`<div class="p-8 text-center text-sm text-red-500">حدث خطأ أثناء تحميل المنتجات.</div>`);
      } else {
        _push(`<table class="w-full text-sm text-right"><thead class="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200"><tr><th class="px-6 py-4 font-medium">المنتج</th><th class="px-6 py-4 font-medium">السعر</th><th class="px-6 py-4 font-medium">المخزون</th><th class="px-6 py-4 font-medium text-left">الإجراءات</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(`<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors"><td class="px-6 py-4 font-medium text-gray-900 flex items-center space-x-3 space-x-reverse"><div class="w-10 h-10 bg-gray-100 rounded bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=100&q=80')" })}"></div><span>${ssrInterpolate(product.name)}</span></td><td class="px-6 py-4">$${ssrInterpolate(product.price)}</td><td class="px-6 py-4">${ssrInterpolate(product.stock)}</td><td class="px-6 py-4 text-left space-x-2 space-x-reverse"><button class="text-blue-500 hover:text-blue-700 font-medium">تعديل</button><button class="text-red-500 hover:text-red-700 font-medium">حذف</button></td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(products) || unref(products).length === 0) {
          _push(`<tr><td colspan="4" class="px-6 py-8 text-center text-gray-500">لا توجد منتجات حالياً.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table>`);
      }
      _push(`</div>`);
      if (unref(isModalOpen)) {
        _push(`<div class="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"><div class="bg-white rounded-xl shadow-xl w-full max-w-md p-6"><h2 class="text-xl font-bold mb-4">${ssrInterpolate(unref(isEditing) ? "تعديل منتج" : "إضافة منتج جديد")}</h2><form class="space-y-4"><div><label class="block text-sm font-medium mb-1">اسم المنتج</label><input${ssrRenderAttr("value", unref(form).name)} required type="text" class="w-full px-3 py-2 border rounded-md"></div><div><label class="block text-sm font-medium mb-1">الوصف</label><textarea class="w-full px-3 py-2 border rounded-md">${ssrInterpolate(unref(form).description)}</textarea></div><div class="grid grid-cols-2 gap-4"><div><label class="block text-sm font-medium mb-1">السعر</label><input${ssrRenderAttr("value", unref(form).price)} required type="number" step="0.01" class="w-full px-3 py-2 border rounded-md"></div><div><label class="block text-sm font-medium mb-1">المخزون</label><input${ssrRenderAttr("value", unref(form).stock)} required type="number" class="w-full px-3 py-2 border rounded-md"></div></div><div class="flex justify-end space-x-3 space-x-reverse mt-6"><button type="button" class="px-4 py-2 border rounded-md hover:bg-gray-50">إلغاء</button><button type="submit"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">${ssrInterpolate(unref(saving) ? "جاري الحفظ..." : "حفظ")}</button></div></form></div></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DDHulahD.js.map
