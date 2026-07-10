<template>
  <div class="min-h-screen flex flex-col font-sans" dir="rtl">
    <!-- Top banner -->
    <div class="bg-brand-gray text-center py-2 text-xs font-medium tracking-wide">
      توصيل واسترجاع مجاني على جميع الطلبات
    </div>

    <!-- Main Navigation -->
    <header class="border-b sticky top-0 bg-brand-white z-50">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="font-black text-2xl tracking-tighter uppercase italic">
          دودو
        </NuxtLink>

        <nav class="hidden md:flex space-x-8 space-x-reverse font-bold text-sm">
          <NuxtLink to="/" class="hover:text-brand-red transition-colors">الرئيسية</NuxtLink>
          <NuxtLink v-if="isAdmin" to="/admin" class="text-brand-red hover:text-red-700 transition-colors">لوحة التحكم</NuxtLink>
        </nav>

        <div class="flex items-center space-x-6 space-x-reverse">
          <div v-if="isAuthenticated" class="flex items-center space-x-4 space-x-reverse">
             <span class="text-sm font-bold">{{ user?.name }}</span>
             <button @click="logout" class="text-sm text-brand-red hover:underline">تسجيل خروج</button>
          </div>
          <div v-else>
             <NuxtLink to="/login" class="text-sm hover:text-brand-red transition-colors font-bold">تسجيل الدخول</NuxtLink>
          </div>

          <NuxtLink to="/cart" class="hover:text-brand-red transition-colors relative">
            <ShoppingBagIcon class="w-6 h-6" />
            <span v-if="cartCount > 0" class="absolute -top-1 -right-2 bg-brand-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {{ cartCount }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-brand-black text-brand-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} شركة دودو. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ShoppingBag as ShoppingBagIcon } from 'lucide-vue-next'
import { computed } from 'vue'

const { cart } = useCart()
const cartCount = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0))

const { user, isAuthenticated, logout, isAdmin } = useAuth()
</script>
