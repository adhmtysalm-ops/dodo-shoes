<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold tracking-tight">Products</h1>
      <button class="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center">
        <PlusIcon class="w-4 h-4 mr-2" />
        Add Product
      </button>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div class="p-4 border-b border-gray-200 bg-gray-50 flex items-center">
        <div class="relative w-full max-w-sm">
          <SearchIcon class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            class="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      </div>

      <div v-if="pending" class="p-8 text-center text-sm text-gray-500">Loading products...</div>
      <div v-else-if="error" class="p-8 text-center text-sm text-red-500">Error loading products.</div>
      <table v-else class="w-full text-sm text-left">
        <thead class="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 font-medium">Product</th>
            <th class="px-6 py-4 font-medium">Category</th>
            <th class="px-6 py-4 font-medium">Price</th>
            <th class="px-6 py-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id" class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-900 flex items-center space-x-3">
              <div class="w-10 h-10 bg-gray-100 rounded bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=100&q=80')"></div>
              <span>{{ product.name }}</span>
            </td>
            <td class="px-6 py-4 text-gray-500">Shoes</td>
            <td class="px-6 py-4">${{ product.price }}</td>
            <td class="px-6 py-4 text-right">
              <button class="text-gray-400 hover:text-black p-1 transition-colors">
                <MoreHorizontalIcon class="w-5 h-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus as PlusIcon, Search as SearchIcon, MoreHorizontal as MoreHorizontalIcon } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const config = useRuntimeConfig()
const { data: products, pending, error } = useFetch(`${config.public.apiUrl}/api/products`)
</script>
