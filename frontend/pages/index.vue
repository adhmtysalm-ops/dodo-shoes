<template>
  <div dir="rtl" class="font-sans">
    <!-- Hero Section -->
    <div class="relative bg-brand-gray overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero background" 
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-6 py-32 sm:py-48 lg:py-56 flex flex-col items-start justify-center min-h-[80vh]">
        <h1 class="text-5xl md:text-8xl font-black text-brand-white uppercase tracking-tighter mb-6 max-w-3xl leading-none">
          أطلق العنان <br/><span class="text-brand-red">لقدراتك</span>
        </h1>
        <p class="mt-4 text-xl text-gray-200 max-w-xl mb-10 font-medium">
          اختبر الجيل القادم من الأحذية الرياضية. مصممة للسرعة والأبطال.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="#shop" class="bg-brand-white text-brand-black px-10 py-4 rounded-full font-bold uppercase hover:bg-gray-200 transition-colors text-center">
            تسوق التشكيلة
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Featured Products -->
    <div id="shop" class="max-w-7xl mx-auto px-6 py-24">
      <div class="flex justify-between items-end mb-12">
        <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight">الرائج الآن</h2>
      </div>

      <div v-if="pending" class="py-20 text-center font-bold">جاري تحميل المنتجات...</div>
      <div v-else-if="error" class="py-20 text-center text-brand-red font-bold">حدث خطأ أثناء التحميل</div>
      
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        <NuxtLink 
          v-for="product in products" 
          :key="product.id" 
          :to="`/products/${product.id}`" 
          class="group block"
        >
          <div class="bg-brand-gray aspect-square mb-4 overflow-hidden rounded-xl">
             <img 
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800" 
              :alt="product.name"
              class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-lg mb-1">{{ product.name }}</h3>
              <p class="text-gray-500 text-sm mb-2">أحذية رجالية</p>
            </div>
            <p class="font-medium">${{ product.price }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { data: products, pending, error } = useFetch(`${config.public.apiUrl}/api/products`)
</script>
