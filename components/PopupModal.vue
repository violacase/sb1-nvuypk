<template>
  <UModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <UCard>
      <template #header>
        <slot name="header">
          <h2 class="text-xl font-semibold">{{ title }}</h2>
        </slot>
      </template>

      <slot>
        <p class="text-gray-600">{{ content }}</p>
      </slot>

      <template #footer>
        <UButton color="gray" variant="ghost" @click="$emit('update:modelValue', false)">
          Close
        </UButton>
      </template>
    </UCard>
  </UModal>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: 'Popup Title'
  },
  content: {
    type: String,
    default: 'Popup content goes here'
  }
})

defineEmits(['update:modelValue'])
</script>