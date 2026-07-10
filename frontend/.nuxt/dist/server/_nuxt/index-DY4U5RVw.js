import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { u as useRuntimeConfig } from "../server.mjs";
import { u as useFetch } from "./fetch-Bno1Rc_O.js";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/hookable/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/unctx/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/defu/dist/defu.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ufo/dist/index.mjs";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/home/adham-atya/DODO_SHOES/frontend/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { data: orders, pending, error } = useFetch(
      `${config.public.apiUrl}/api/orders`,
      "$Z2Sv9tKIMR"
      /* nuxt-injected */
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div class="flex justify-between items-center"><h1 class="text-3xl font-bold tracking-tight">Orders</h1></div><div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">`);
      if (unref(pending)) {
        _push(`<div class="p-8 text-center text-sm text-gray-500">Loading orders...</div>`);
      } else if (unref(error)) {
        _push(`<div class="p-8 text-center text-sm text-red-500">Error loading orders.</div>`);
      } else {
        _push(`<table class="w-full text-sm text-left"><thead class="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200"><tr><th class="px-6 py-4 font-medium">Order ID</th><th class="px-6 py-4 font-medium">Customer</th><th class="px-6 py-4 font-medium">Total</th><th class="px-6 py-4 font-medium">Status</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(orders), (order) => {
          _push(`<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors"><td class="px-6 py-4 font-medium text-gray-900">#ORD-${ssrInterpolate(order.id)}</td><td class="px-6 py-4 text-gray-500">Customer ${ssrInterpolate(order.userId)}</td><td class="px-6 py-4 font-medium">$${ssrInterpolate(order.totalAmount)}</td><td class="px-6 py-4"><span class="${ssrRenderClass([order.status === "COMPLETED" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700", "px-2 py-1 text-xs font-medium rounded-full"])}">${ssrInterpolate(order.status)}</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DY4U5RVw.js.map
