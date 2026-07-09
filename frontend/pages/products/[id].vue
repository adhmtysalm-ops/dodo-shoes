<template>
  <div>
    <div v-if="pending" class="py-20 text-center font-bold">Loading...</div>
    <div v-else-if="error || !product" class="py-20 text-center text-brand-red font-bold">Product not found</div>
    
    <div v-else class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="bg-gray-100 aspect-square rounded-2xl overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1200" 
            :alt="product.name"
            class="object-cover w-full h-full"
          />
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">{{ product.name }}</h1>
        <p class="text-2xl font-medium mb-6">${{ product.price }}</p>
        <p class="text-gray-600 mb-8 max-w-md leading-relaxed">
          {{ product.description || "The perfect companion for your daily runs. Engineered for maximum speed and comfort." }}
        </p>
        
        <div class="space-y-4">
          <button @click="addToCart(product)" class="w-full bg-brand-black text-brand-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors">
            Add to Bag
          </button>
          <button class="w-full bg-gray-100 text-brand-black py-4 rounded-full font-bold uppercase hover:bg-gray-200 transition-colors">
            Favorite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const config = useRuntimeConfig()
const { addToCart } = useCart()

const { data: products, pending, error } = useFetch(`${config.public.apiUrl}/api/products`)

const product = computed(() => {
  if (!products.value) return null
  // The API returns an array, so we find the one matching the ID
  return (products.value as any[]).find(p => p.id === parseInt(route.params.id as string))
})
</script>
