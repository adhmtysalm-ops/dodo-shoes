<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold tracking-tight">Orders</h1>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div v-if="pending" class="p-8 text-center text-sm text-gray-500">Loading orders...</div>
      <div v-else-if="error" class="p-8 text-center text-sm text-red-500">Error loading orders.</div>
      <table v-else class="w-full text-sm text-left">
        <thead class="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 font-medium">Order ID</th>
            <th class="px-6 py-4 font-medium">Customer</th>
            <th class="px-6 py-4 font-medium">Total</th>
            <th class="px-6 py-4 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-900">#ORD-{{ order.id }}</td>
            <td class="px-6 py-4 text-gray-500">Customer {{ order.userId }}</td>
            <td class="px-6 py-4 font-medium">${{ order.totalAmount }}</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 text-xs font-medium rounded-full" :class="order.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'">
                {{ order.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

const config = useRuntimeConfig()
const { data: orders, pending, error } = useFetch(`${config.public.apiUrl}/api/orders`)
</script>
