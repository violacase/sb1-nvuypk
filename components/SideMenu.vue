<template>
  <aside class="w-64 bg-white border-r border-gray-200 min-h-full">
    <nav class="p-4 space-y-1">
      <NuxtLink 
        v-for="item in sideMenuItems" 
        :key="item.path" 
        :to="item.path"
        class="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
        :class="{ 'bg-gray-100 text-blue-600': isActive(item.path) }"
      >
        <UIcon :name="item.icon" class="w-5 h-5 mr-3" />
        {{ item.name }}
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
const route = useRoute()

const sideMenuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: 'i-heroicons-home' },
  { name: 'Projects', path: '/projects', icon: 'i-heroicons-briefcase' },
  { name: 'Tasks', path: '/tasks', icon: 'i-heroicons-clipboard-document-list' },
  { name: 'Reports', path: '/reports', icon: 'i-heroicons-chart-bar' },
  { name: 'Settings', path: '/settings', icon: 'i-heroicons-cog-6-tooth' }
]

const isActive = (path) => {
  return route.path === path
}
</script>