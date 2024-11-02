<template>
  <div class="container mx-auto p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Tasks</h1>
      <UButton icon="i-heroicons-plus" color="primary" @click="showNewTaskModal = true">
        Add Task
      </UButton>
    </div>

    <UCard v-for="task in sortedTasks" :key="task.id" class="mb-4">
      <div class="flex items-start gap-4">
        <UCheckbox 
          v-model="task.completed" 
          :label="task.id === editingTask?.id ? '' : task.title"
          @change="updateTask(task)"
        />
        <div class="flex-1">
          <div v-if="editingTask?.id === task.id" class="space-y-3">
            <UInput
              v-model="editingTask.title"
              v-focus
              placeholder="Task title"
            />
            <UTextarea
              v-model="editingTask.description"
              placeholder="Task description"
            />
            <div class="flex gap-3">
              <USelect
                v-model="editingTask.priority"
                :options="['low', 'medium', 'high']"
              />
              <UInput
                v-model="editingTask.dueDate"
                type="date"
              />
            </div>
            <div class="flex gap-2">
              <UButton color="green" @click="saveEdit">Save</UButton>
              <UButton color="gray" variant="ghost" @click="cancelEdit">Cancel</UButton>
            </div>
          </div>
          <div v-else>
             <p class="text-sm text-gray-600">{{ task.description }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <UBadge :color="getPriorityColor(task.priority)">
            {{ task.priority }}
          </UBadge>
          <span class="text-sm text-gray-500">{{ formatDate(task.dueDate) }}</span>
          <div class="flex gap-1">
            <UButton
              color="blue"
              variant="ghost"
              icon="i-heroicons-pencil"
              size="xs"
              @click="startEditing(task)"
            />
            <UButton
              color="red"
              variant="ghost"
              icon="i-heroicons-trash"
              size="xs"
              @click="removeTask(task)"
            />
          </div>
        </div>
      </div>
    </UCard>

    <!-- New Task Modal -->
    <UModal v-model="showNewTaskModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">New Task</h3>
        </template>

        <form @submit.prevent="addTask" class="space-y-4">
          <UFormGroup label="Title" required>
            <UInput v-model="newTask.title" required />
          </UFormGroup>

          <UFormGroup label="Description">
            <UTextarea v-model="newTask.description" />
          </UFormGroup>

          <UFormGroup label="Priority" required>
            <USelect
              v-model="newTask.priority"
              :options="['low', 'medium', 'high']"
              required
            />
          </UFormGroup>

          <UFormGroup label="Due Date" required>
            <UInput
              v-model="newTask.dueDate"
              type="date"
              required
            />
          </UFormGroup>
        </form>

        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton
              color="gray"
              variant="ghost"
              @click="showNewTaskModal = false"
            >
              Cancel
            </UButton>
            <UButton
              color="primary"
              @click="addTask"
              :disabled="!isValidTask"
            >
              Add Task
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const tasks = ref([])
const showNewTaskModal = ref(false)
const editingTask = ref(null)

// Custom directive for auto-focus
const vFocus = {
  mounted: (el) => el.focus()
}

// New task template
const newTask = ref({
  title: '',
  description: '',
  priority: 'medium',
  dueDate: new Date().toISOString().split('T')[0]
})

// Computed property for form validation
const isValidTask = computed(() => {
  return newTask.value.title.trim() && newTask.value.dueDate
})

// Load tasks from localStorage on mount
onMounted(() => {
  const savedTasks = localStorage.getItem('tasks')
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks)
  }
})

// Save tasks to localStorage whenever they change
watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}, { deep: true })

// Sort tasks by completion status and due date
const sortedTasks = computed(() => {
  return [...tasks.value].sort((a, b) => {
    if (a.completed === b.completed) {
      return new Date(a.dueDate) - new Date(b.dueDate)
    }
    return a.completed ? 1 : -1
  })
})

// Format date to be more readable
const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high': return 'red'
    case 'medium': return 'yellow'
    case 'low': return 'green'
    default: return 'gray'
  }
}

// Task management functions
const addTask = () => {
  if (!isValidTask.value) return

  tasks.value.push({
    id: Date.now(),
    title: newTask.value.title,
    description: newTask.value.description,
    completed: false,
    priority: newTask.value.priority,
    dueDate: newTask.value.dueDate
  })

  // Reset form and close modal
  newTask.value = {
    title: '',
    description: '',
    priority: 'medium',
    dueDate: new Date().toISOString().split('T')[0]
  }
  showNewTaskModal.value = false
}

const removeTask = (task) => {
  tasks.value = tasks.value.filter(t => t.id !== task.id)
}

const updateTask = (task) => {
  const index = tasks.value.findIndex(t => t.id === task.id)
  if (index !== -1) {
    tasks.value[index] = { ...task }
  }
}

const startEditing = (task) => {
  editingTask.value = { ...task }
}

const saveEdit = () => {
  if (!editingTask.value?.title.trim()) return
  
  const index = tasks.value.findIndex(t => t.id === editingTask.value.id)
  if (index !== -1) {
    tasks.value[index] = { ...editingTask.value }
  }
  editingTask.value = null
}

const cancelEdit = () => {
  editingTask.value = null
}

// Handle escape key to cancel editing
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && editingTask.value) {
      cancelEdit()
    }
  }
  
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => window.removeEventListener('keydown', handleEscape))
})
</script>