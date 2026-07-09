<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold tracking-tight">Overview</h1>
      <div class="flex space-x-2">
        <button class="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          Download Report
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 class="text-sm font-medium text-gray-500 mb-1">Total Revenue</h3>
        <p class="text-3xl font-bold tracking-tight">$45,231.89</p>
        <p class="text-sm text-green-600 mt-2 flex items-center">
          <TrendingUpIcon class="w-4 h-4 mr-1" />
          +20.1% from last month
        </p>
      </div>
      <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 class="text-sm font-medium text-gray-500 mb-1">Active Orders</h3>
        <p class="text-3xl font-bold tracking-tight">+235</p>
        <p class="text-sm text-green-600 mt-2 flex items-center">
          <TrendingUpIcon class="w-4 h-4 mr-1" />
          +10.5% from last month
        </p>
      </div>
      <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 class="text-sm font-medium text-gray-500 mb-1">Total Products</h3>
        <p class="text-3xl font-bold tracking-tight">12</p>
        <p class="text-sm text-gray-500 mt-2">
          +3 added this week
        </p>
      </div>
    </div>

    <!-- Recent Activity Placeholder -->
    <div class="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
      <h2 class="text-lg font-bold mb-4">Recent Activity</h2>
      <div class="space-y-4">
        <div class="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBagIcon class="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p class="font-medium text-sm">New Order #ORD-492</p>
              <p class="text-xs text-gray-500">2 items &bull; $240.00</p>
            </div>
          </div>
          <span class="text-xs text-gray-400">Just now</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TrendingUp as TrendingUpIcon, ShoppingBag as ShoppingBagIcon } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})
</script>
