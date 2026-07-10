<template>
  <div class="space-y-8" dir="rtl">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold tracking-tight">المنتجات</h1>
      <button @click="openCreateModal" class="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center">
        <PlusIcon class="w-4 h-4 ml-2" />
        إضافة منتج
      </button>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div v-if="pending" class="p-8 text-center text-sm text-gray-500">جاري تحميل المنتجات...</div>
      <div v-else-if="error" class="p-8 text-center text-sm text-red-500">حدث خطأ أثناء تحميل المنتجات.</div>
      <table v-else class="w-full text-sm text-right">
        <thead class="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 font-medium">المنتج</th>
            <th class="px-6 py-4 font-medium">السعر</th>
            <th class="px-6 py-4 font-medium">المخزون</th>
            <th class="px-6 py-4 font-medium text-left">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id" class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-900 flex items-center space-x-3 space-x-reverse">
              <div class="w-10 h-10 bg-gray-100 rounded bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=100&q=80')"></div>
              <span>{{ product.name }}</span>
            </td>
            <td class="px-6 py-4">${{ product.price }}</td>
            <td class="px-6 py-4">{{ product.stock }}</td>
            <td class="px-6 py-4 text-left space-x-2 space-x-reverse">
              <button @click="openEditModal(product)" class="text-blue-500 hover:text-blue-700 font-medium">تعديل</button>
              <button @click="deleteProduct(product.id)" class="text-red-500 hover:text-red-700 font-medium">حذف</button>
            </td>
          </tr>
          <tr v-if="!products || products.length === 0">
            <td colspan="4" class="px-6 py-8 text-center text-gray-500">لا توجد منتجات حالياً.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Form -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ isEditing ? 'تعديل منتج' : 'إضافة منتج جديد' }}</h2>
        <form @submit.prevent="saveProduct" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">اسم المنتج</label>
            <input v-model="form.name" required type="text" class="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">الوصف</label>
            <textarea v-model="form.description" class="w-full px-3 py-2 border rounded-md"></textarea>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">السعر</label>
              <input v-model="form.price" required type="number" step="0.01" class="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">المخزون</label>
              <input v-model="form.stock" required type="number" class="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>
          <div class="flex justify-end space-x-3 space-x-reverse mt-6">
            <button type="button" @click="closeModal" class="px-4 py-2 border rounded-md hover:bg-gray-50">إلغاء</button>
            <button type="submit" :disabled="saving" class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              {{ saving ? 'جاري الحفظ...' : 'حفظ' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus as PlusIcon } from 'lucide-vue-next'

definePageMeta({ layout: 'admin' })

const config = useRuntimeConfig()
const { token } = useAuth()
const { data: products, pending, error, refresh } = useFetch(`${config.public.apiUrl}/api/products`)

const isModalOpen = ref(false)
const isEditing = ref(false)
const saving = ref(false)
const form = ref({ id: null, name: '', description: '', price: 0, stock: 0 })

const openCreateModal = () => {
  isEditing.value = false
  form.value = { id: null, name: '', description: '', price: 0, stock: 0 }
  isModalOpen.value = true
}

const openEditModal = (product: any) => {
  isEditing.value = true
  form.value = { ...product }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const saveProduct = async () => {
  saving.value = true
  try {
    const url = isEditing.value 
      ? `${config.public.apiUrl}/api/products/${form.value.id}`
      : `${config.public.apiUrl}/api/products`
    const method = isEditing.value ? 'PUT' : 'POST'
    
    await $fetch(url, {
      method,
      headers: { Authorization: `Bearer ${token.value}` },
      body: {
        name: form.value.name,
        description: form.value.description,
        price: Number(form.value.price),
        stock: Number(form.value.stock),
        category_id: null // simplified for now
      }
    })
    
    closeModal()
    refresh()
  } catch (e) {
    alert('حدث خطأ أثناء الحفظ')
  }
  saving.value = false
}

const deleteProduct = async (id: number) => {
  if (!confirm('هل أنت متأكد من حذف هذا المنتج؟')) return
  try {
    await $fetch(`${config.public.apiUrl}/api/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token.value}` }
    })
    refresh()
  } catch (e) {
    alert('حدث خطأ أثناء الحذف')
  }
}
</script>
