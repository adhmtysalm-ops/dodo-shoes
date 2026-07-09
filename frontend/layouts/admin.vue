<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- Admin Navigation (Vercel Style) -->
    <header class="bg-white border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <span class="text-white text-xs font-bold">D</span>
            </div>
            <span class="font-medium text-sm">DODO Admin</span>
          </div>
          <nav class="hidden md:flex space-x-6 text-sm">
            <NuxtLink to="/admin" class="text-gray-500 hover:text-black transition-colors" exact-active-class="text-black font-medium border-b-2 border-black pb-[18px] translate-y-[10px]">Overview</NuxtLink>
            <NuxtLink to="/admin/products" class="text-gray-500 hover:text-black transition-colors" active-class="text-black font-medium border-b-2 border-black pb-[18px] translate-y-[10px]">Products</NuxtLink>
            <NuxtLink to="/admin/orders" class="text-gray-500 hover:text-black transition-colors" active-class="text-black font-medium border-b-2 border-black pb-[18px] translate-y-[10px]">Orders</NuxtLink>
            <NuxtLink to="/" class="text-gray-500 hover:text-black transition-colors">Storefront ↗</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>
