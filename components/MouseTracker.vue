<template>
  <ClientOnly>
    <div class="text-sm text-gray-500">
      Mouse position: x: {{ x }}, y: {{ y }}
    </div>
    <template #fallback>
      <div class="text-sm text-gray-500">Loading mouse position...</div>
    </template>
  </ClientOnly>
</template>

<script setup>
const { x, y } = useMouse()
</script>