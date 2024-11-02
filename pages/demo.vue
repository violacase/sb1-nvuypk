<template>
  <div class="container">
    <ClientOnly>
      <p class="mouse-position">Mouse position: x: {{ x }}, y: {{ y }}</p>
    </ClientOnly>

    <button @click="isOpen = true" class="modern-button">Open Popup</button>

    <Teleport to="body">
      <div v-if="isOpen" class="dialog-overlay" @click="isOpen = false">
        <div class="dialog-content" @click.stop>
          <h2 class="dialog-title">Welcome to our Popup!</h2>
          <p class="dialog-description">
            This is a modern popup created with Vue 3.
          </p>
          <button @click="isOpen = false" class="close-button">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { x, y } = useMouse()
const isOpen = ref(false)
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mouse-position {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.modern-button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modern-button:hover {
  background-color: #2563eb;
}

.dialog-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-content {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 90vw;
  max-width: 450px;
  padding: 2rem;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.dialog-description {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 1.5rem;
}

.close-button {
  background-color: #e2e8f0;
  color: #475569;
  border: none;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #cbd5e1;
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>