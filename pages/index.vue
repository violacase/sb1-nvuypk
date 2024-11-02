<template>
  <div class="container mx-auto p-6">
    <MouseTracker class="mb-6" />
    
    <UButton @click="isOpen = true">Open Popup</UButton>

    <PopupModal
      v-model="isOpen"
      title="Welcome to our Popup!"
      content="This is a modern popup created with Vue 3 and Nuxt UI."
    />
  </div>
</template>

<script setup>
const isOpen = ref(false)

onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isOpen.value) {
      isOpen.value = false
    }
  }
  
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => window.removeEventListener('keydown', handleEscape))
})
</script>