export const useAuth = () => {
  const user = useState('auth-user', () => null as any)
  const token = useCookie('auth-token', { maxAge: 60 * 60 * 24 * 30 }) // 30 days
  const config = useRuntimeConfig()

  const setAuth = (newUser: any, newToken: string) => {
    user.value = newUser
    token.value = newToken
  }

  const logout = () => {
    user.value = null
    token.value = null
    navigateTo('/login')
  }

  const login = async (phone: string, password: string) => {
    try {
      const { data, error } = await useFetch(`${config.public.apiUrl}/api/auth/login`, {
        method: 'POST',
        body: { phone, password }
      })
      if (error.value) throw error.value
      
      const res = data.value as any
      if (res.success) {
        setAuth(res.user, res.token)
        return { success: true }
      }
      return { success: false, error: res.error }
    } catch (e: any) {
      return { success: false, error: e.data?.error || 'Login failed' }
    }
  }

  const register = async (name: string, phone: string, password: string) => {
    try {
      const { data, error } = await useFetch(`${config.public.apiUrl}/api/auth/register`, {
        method: 'POST',
        body: { name, phone, password }
      })
      if (error.value) throw error.value
      
      const res = data.value as any
      if (res.success) {
        setAuth(res.user, res.token)
        return { success: true }
      }
      return { success: false, error: res.error }
    } catch (e: any) {
      return { success: false, error: e.data?.error || 'Registration failed' }
    }
  }

  const forgotPassword = async (phone: string) => {
    // Simulated forgot password endpoint
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true, message: "تم إرسال رابط استعادة كلمة المرور إلى هاتفك" })
      }, 1000)
    })
  }

  const isAdmin = computed(() => user.value?.role === 'admin')
  const isAuthenticated = computed(() => !!token.value)

  return {
    user,
    token,
    login,
    register,
    logout,
    forgotPassword,
    isAdmin,
    isAuthenticated
  }
}
