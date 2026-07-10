<template>
  <div class="min-h-screen bg-gray-50 font-sans" dir="rtl">
    <!-- Admin Navigation (Vercel Style) -->
    <header class="bg-white border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center space-x-8 space-x-reverse">
          <div class="flex items-center space-x-2 space-x-reverse">
            <div class="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <span class="text-white text-xs font-bold">D</span>
            </div>
            <span class="font-medium text-sm">لوحة تحكم دودو</span>
          </div>
          <nav class="hidden md:flex space-x-6 space-x-reverse text-sm">
            <NuxtLink to="/admin" class="text-gray-500 hover:text-black transition-colors" exact-active-class="text-black font-medium border-b-2 border-black pb-[18px] translate-y-[10px]">نظرة عامة</NuxtLink>
            <NuxtLink to="/admin/products" class="text-gray-500 hover:text-black transition-colors" active-class="text-black font-medium border-b-2 border-black pb-[18px] translate-y-[10px]">المنتجات</NuxtLink>
            <NuxtLink to="/" class="text-gray-500 hover:text-black transition-colors">المتجر ↗</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { isAdmin } = useAuth()

onMounted(() => {
  if (!isAdmin.value) {
    navigateTo('/login')
  }
})
</script>
