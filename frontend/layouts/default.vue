<template>
  <div class="min-h-screen flex flex-col font-sans">
    <!-- Top banner -->
    <div class="bg-brand-gray text-center py-2 text-xs font-medium tracking-wide">
      Free Delivery & Returns on all Orders
    </div>

    <!-- Main Navigation -->
    <header class="border-b sticky top-0 bg-brand-white z-50">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="font-black text-2xl tracking-tighter uppercase italic">
          DODO
        </NuxtLink>

        <nav class="hidden md:flex space-x-8 font-bold text-sm">
          <NuxtLink to="/" class="hover:text-brand-red transition-colors">New & Featured</NuxtLink>
          <NuxtLink to="/" class="hover:text-brand-red transition-colors">Men</NuxtLink>
          <NuxtLink to="/" class="hover:text-brand-red transition-colors">Women</NuxtLink>
          <NuxtLink to="/" class="hover:text-brand-red transition-colors">Kids</NuxtLink>
          <NuxtLink to="/admin" class="text-gray-400 hover:text-black transition-colors">Admin Dashboard</NuxtLink>
        </nav>

        <div class="flex items-center space-x-6">
          <button class="hover:text-brand-red transition-colors">
            <SearchIcon class="w-6 h-6" />
          </button>
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
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-bold uppercase tracking-wider mb-4">Find a Store</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-white">Become a Member</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white">Sign Up for Email</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white">Send Us Feedback</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold uppercase tracking-wider mb-4">Get Help</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-white">Order Status</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white">Delivery</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white">Returns</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white">Payment Options</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold uppercase tracking-wider mb-4">About DODO</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-white">News</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white">Careers</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white">Investors</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} DODO, Inc. All Rights Reserved</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <NuxtLink to="/" class="hover:text-white">Guides</NuxtLink>
          <NuxtLink to="/" class="hover:text-white">Terms of Sale</NuxtLink>
          <NuxtLink to="/" class="hover:text-white">Terms of Use</NuxtLink>
          <NuxtLink to="/" class="hover:text-white">DODO Privacy Policy</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Search as SearchIcon, ShoppingBag as ShoppingBagIcon } from 'lucide-vue-next'
import { computed } from 'vue'

const { cart } = useCart()
const cartCount = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0))
</script>
