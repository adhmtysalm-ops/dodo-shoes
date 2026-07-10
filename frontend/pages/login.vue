<template>
  <div class="min-h-screen bg-brand-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans" dir="rtl">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-black text-brand-black uppercase">تسجيل الدخول لحسابك</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        أو
        <NuxtLink to="/register" class="font-bold text-brand-red hover:text-red-500 transition-colors">قم بإنشاء حساب جديد</NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">رقم الهاتف</label>
            <div class="mt-1">
              <input id="phone" v-model="phone" name="phone" type="tel" autocomplete="tel" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr" placeholder="01xxxxxxxxx" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">كلمة المرور</label>
            <div class="mt-1">
              <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded" />
              <label for="remember-me" class="mr-2 block text-sm text-gray-900">تذكرني</label>
            </div>

            <div class="text-sm">
              <NuxtLink to="/forgot-password" class="font-bold text-brand-red hover:text-red-500">نسيت كلمة المرور؟</NuxtLink>
            </div>
          </div>

          <div v-if="errorMsg" class="p-3 rounded bg-red-50 text-red-600 text-sm font-medium">
            {{ errorMsg }}
          </div>

          <div>
            <button type="submit" :disabled="loading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-black transition-colors disabled:opacity-50">
              {{ loading ? 'جاري الدخول...' : 'تسجيل الدخول' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const phone = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const { login } = useAuth()

const handleLogin = async () => {
  loading.value = true
  errorMsg.value = ''
  
  const res = await login(phone.value, password.value)
  if (res.success) {
    navigateTo('/')
  } else {
    errorMsg.value = res.error || 'فشل تسجيل الدخول. تأكد من صحة البيانات.'
  }
  
  loading.value = false
}
</script>
