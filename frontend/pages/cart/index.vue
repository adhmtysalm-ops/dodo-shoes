<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-black uppercase tracking-tight mb-10">Bag</h1>
    
    <div v-if="cart.length === 0" class="text-center py-20">
      <p class="text-gray-500 mb-6">There are no items in your bag.</p>
      <NuxtLink to="/" class="bg-brand-black text-brand-white px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors">
        Shop Now
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2 space-y-8">
        <div v-for="item in cart" :key="item.id" class="flex gap-6 border-b pb-8">
          <div class="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden shrink-0">
             <img 
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=400" 
                :alt="item.name"
                class="object-cover w-full h-full"
              />
          </div>
          <div class="flex-grow flex flex-col justify-between">
            <div class="flex justify-between">
              <div>
                <h3 class="font-bold text-lg">{{ item.name }}</h3>
                <p class="text-gray-500 text-sm mb-1">Men's Shoes</p>
                <p class="text-gray-500 text-sm mb-4">Size: 42</p>
              </div>
              <p class="font-medium">${{ item.price }}</p>
            </div>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <span class="text-gray-500">Quantity</span>
                <select 
                  :value="item.quantity" 
                  @change="(e) => updateQuantity(item.id, parseInt((e.target as HTMLSelectElement).value))"
                  class="border-gray-300 rounded-md focus:ring-black focus:border-black p-1"
                >
                  <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
              </div>
              <button @click="removeFromCart(item.id)" class="text-gray-400 hover:text-brand-red underline text-sm transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-8 rounded-2xl h-fit">
        <h2 class="text-2xl font-bold mb-6">Summary</h2>
        <div class="space-y-4 mb-6 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-600">Subtotal</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div class="flex justify-between border-t pt-4 font-bold text-lg">
            <span>Total</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>
        </div>
        <button class="w-full bg-brand-black text-brand-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors">
          Guest Checkout
        </button>
        <button class="w-full bg-gray-200 text-brand-black py-4 rounded-full font-bold uppercase hover:bg-gray-300 transition-colors mt-3">
          Member Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { cart, updateQuantity, removeFromCart } = useCart()

const subtotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})
</script>
