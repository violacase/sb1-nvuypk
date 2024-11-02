<template>
  <nav class="bg-white border-b border-gray-200 h-16">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-xl font-bold text-gray-900">MyApp</span>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>