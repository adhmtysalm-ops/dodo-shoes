import { toRef, isRef, ref, computed } from "vue";
import { a as useNuxtApp, n as navigateTo, u as useRuntimeConfig } from "../server.mjs";
import { parse } from "/home/adham-atya/DODO_SHOES/frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import { getRequestHeader, setCookie, getCookie, deleteCookie } from "/home/adham-atya/DODO_SHOES/frontend/node_modules/h3/dist/index.mjs";
import destr from "/home/adham-atya/DODO_SHOES/frontend/node_modules/destr/dist/index.mjs";
import { isEqual } from "/home/adham-atya/DODO_SHOES/frontend/node_modules/ohash/dist/index.mjs";
import { klona } from "/home/adham-atya/DODO_SHOES/frontend/node_modules/klona/dist/index.mjs";
import { a as useRequestEvent, u as useFetch } from "./fetch-Bno1Rc_O.js";
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => {
    const decoded = decodeURIComponent(val);
    const parsed = destr(decoded);
    if (typeof parsed === "number" && (!Number.isFinite(parsed) || String(parsed) !== decoded)) {
      return decoded;
    }
    return parsed;
  },
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ??= (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? opts.default?.());
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies ||= {};
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useAuth = () => {
  const user = useState("auth-user", () => null);
  const token = useCookie("auth-token", { maxAge: 60 * 60 * 24 * 30 });
  const config = useRuntimeConfig();
  const setAuth = (newUser, newToken) => {
    user.value = newUser;
    token.value = newToken;
  };
  const logout = () => {
    user.value = null;
    token.value = null;
    navigateTo("/login");
  };
  const login = async (phone, password) => {
    try {
      const { data, error } = await useFetch(
        `${config.public.apiUrl}/api/auth/login`,
        {
          method: "POST",
          body: { phone, password }
        },
        "$emwLPH3ugT"
        /* nuxt-injected */
      );
      if (error.value) throw error.value;
      const res = data.value;
      if (res.success) {
        setAuth(res.user, res.token);
        return { success: true };
      }
      return { success: false, error: res.error };
    } catch (e) {
      return { success: false, error: e.data?.error || "Login failed" };
    }
  };
  const register = async (name, phone, password) => {
    try {
      const { data, error } = await useFetch(
        `${config.public.apiUrl}/api/auth/register`,
        {
          method: "POST",
          body: { name, phone, password }
        },
        "$l_T5yVObig"
        /* nuxt-injected */
      );
      if (error.value) throw error.value;
      const res = data.value;
      if (res.success) {
        setAuth(res.user, res.token);
        return { success: true };
      }
      return { success: false, error: res.error };
    } catch (e) {
      return { success: false, error: e.data?.error || "Registration failed" };
    }
  };
  const forgotPassword = async (phone) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "تم إرسال رابط استعادة كلمة المرور إلى هاتفك" });
      }, 1e3);
    });
  };
  const isAdmin = computed(() => user.value?.role === "admin");
  const isAuthenticated = computed(() => !!token.value);
  return {
    user,
    token,
    login,
    register,
    logout,
    forgotPassword,
    isAdmin,
    isAuthenticated
  };
};
export {
  useAuth as u
};
//# sourceMappingURL=useAuth-DY1eECjO.js.map
