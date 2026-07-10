<template>
  <div class="min-h-screen bg-brand-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans" dir="rtl">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-black text-brand-black uppercase">إنشاء حساب جديد</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        أو
        <NuxtLink to="/login" class="font-bold text-brand-red hover:text-red-500 transition-colors">قم بتسجيل الدخول إذا كان لديك حساب</NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleRegister">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">الاسم الكامل</label>
            <div class="mt-1">
              <input id="name" v-model="name" name="name" type="text" autocomplete="name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-right" placeholder="أدخل اسمك الكريم" />
            </div>
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">رقم الهاتف</label>
            <div class="mt-1">
              <input id="phone" v-model="phone" name="phone" type="tel" autocomplete="tel" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr" placeholder="01xxxxxxxxx" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">كلمة المرور</label>
            <div class="mt-1">
              <input id="password" v-model="password" name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm text-left" dir="ltr" />
            </div>
          </div>

          <div v-if="errorMsg" class="p-3 rounded bg-red-50 text-red-600 text-sm font-medium">
            {{ errorMsg }}
          </div>

          <div>
            <button type="submit" :disabled="loading" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-black transition-colors disabled:opacity-50">
              {{ loading ? 'جاري الإنشاء...' : 'إنشاء الحساب' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = ref('')
const phone = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const { register } = useAuth()

const handleRegister = async () => {
  loading.value = true
  errorMsg.value = ''
  
  const res = await register(name.value, phone.value, password.value)
  if (res.success) {
    navigateTo('/')
  } else {
    errorMsg.value = res.error || 'فشل إنشاء الحساب. تأكد من صحة البيانات أو أن رقم الهاتف غير مسجل مسبقاً.'
  }
  
  loading.value = false
}
</script>
