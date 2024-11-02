<template>
  <div class="container mx-auto p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Projects</h1>
      <UButton icon="i-heroicons-plus" color="primary">New Project</UButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard v-for="project in projects" :key="project.id">
        <template #header>
          <h3 class="text-lg font-semibold">{{ project.name }}</h3>
        </template>

        <p class="text-gray-600">{{ project.description }}</p>

        <template #footer>
          <div class="flex justify-between items-center">
            <UBadge :color="getStatusColor(project.status)">
              {{ project.status }}
            </UBadge>
            <span class="text-sm text-gray-500">{{ project.date }}</span>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const projects = ref([
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of company website',
    status: 'in-progress',
    date: '2024-03-15'
  },
  {
    id: 2,
    name: 'Mobile App',
    description: 'New mobile application development',
    status: 'planning',
    date: '2024-04-01'
  },
  {
    id: 3,
    name: 'API Integration',
    description: 'Third-party API integration project',
    status: 'completed',
    date: '2024-02-28'
  }
])

const getStatusColor = (status) => {
  switch (status) {
    case 'in-progress': return 'yellow'
    case 'planning': return 'blue'
    case 'completed': return 'green'
    default: return 'gray'
  }
}
</script>