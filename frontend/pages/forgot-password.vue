<template>
  <div class="min-h-screen bg-brand-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans" dir="rtl">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-black text-brand-black uppercase">استعادة كلمة المرور</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        أدخل رقم هاتفك وسنرسل لك رمز التحقق
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form v-if="!success" class="space-y-6" @submit.prevent="handleForgot">
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">رقم الهاتف</label>
            <div class="mt-1">
              <input id="phone" v-model="phone" name="phone" type="tel" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr" placeholder="01xxxxxxxxx" />
            </div>
          </div>

          <div v-if="errorMsg" class="p-3 rounded bg-red-50 text-red-600 text-sm font-medium">
            {{ errorMsg }}
          </div>

          <div>
            <button type="submit" :disabled="loading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-black transition-colors disabled:opacity-50">
              {{ loading ? 'جاري الإرسال...' : 'إرسال الرمز' }}
            </button>
          </div>
          
          <div class="mt-4 text-center">
            <NuxtLink to="/login" class="text-sm font-medium text-brand-red hover:text-red-500">العودة لتسجيل الدخول</NuxtLink>
          </div>
        </form>
        
        <div v-else class="text-center space-y-4">
          <div class="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900">تم الإرسال بنجاح!</h3>
          <p class="text-sm text-gray-500">تم إرسال رابط استعادة كلمة المرور إلى هاتفك في رسالة نصية.</p>
          <div class="mt-6">
            <NuxtLink to="/login" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-black hover:bg-gray-800 transition-colors">
              العودة لتسجيل الدخول
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const phone = ref('')
const loading = ref(false)
const success = ref(false)
const errorMsg = ref('')

const { forgotPassword } = useAuth()

const handleForgot = async () => {
  loading.value = true
  errorMsg.value = ''
  
  const res = await forgotPassword(phone.value) as any
  if (res.success) {
    success.value = true
  } else {
    errorMsg.value = res.error || 'حدث خطأ. حاول مرة أخرى.'
  }
  
  loading.value = false
}
</script>
