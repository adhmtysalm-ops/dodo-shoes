import { computed, toRef, isRef, ref } from 'vue';
import { a as useNuxtApp, n as navigateTo, u as useRuntimeConfig } from './server.mjs';
import { t as klona, v as getRequestHeader, x as destr, y as isEqual, z as setCookie, A as getCookie, B as deleteCookie } from '../nitro/nitro.mjs';
import { u as useFetch, a as useRequestEvent } from './fetch-Bno1Rc_O.mjs';

const NullObject = /* @__PURE__ */ (() => {
  const C = function() {
  };
  C.prototype = /* @__PURE__ */ Object.create(null);
  return C;
})();
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = new NullObject();
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

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
  var _a, _b, _c;
  const opts = { ...CookieDefaults, ..._opts };
  (_a = opts.filter) != null ? _a : opts.filter = (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : (_c = cookies[name]) != null ? _c : (_b = opts.default) == null ? void 0 : _b.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
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
    var _a;
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
      return { success: false, error: ((_a = e.data) == null ? void 0 : _a.error) || "Login failed" };
    }
  };
  const register = async (name, phone, password) => {
    var _a;
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
      return { success: false, error: ((_a = e.data) == null ? void 0 : _a.error) || "Registration failed" };
    }
  };
  const forgotPassword = async (phone) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0627\u0628\u0637 \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0625\u0644\u0649 \u0647\u0627\u062A\u0641\u0643" });
      }, 1e3);
    });
  };
  const isAdmin = computed(() => {
    var _a;
    return ((_a = user.value) == null ? void 0 : _a.role) === "admin";
  });
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

export { useAuth as u };
//# sourceMappingURL=useAuth-DY1eECjO.mjs.map
