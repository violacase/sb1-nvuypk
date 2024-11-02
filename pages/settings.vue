<template>
  <div class="container mx-auto p-6 max-w-2xl">
    <h1 class="text-2xl font-bold mb-6">Settings</h1>

    <UCard class="mb-6">
      <template #header>
        <h2 class="text-lg font-semibold">Profile Settings</h2>
      </template>

      <div class="space-y-4">
        <UFormGroup label="Display Name">
          <UInput v-model="settings.displayName" />
        </UFormGroup>
        <UFormGroup label="Email">
          <UInput v-model="settings.email" type="email" />
        </UFormGroup>
      </div>
    </UCard>

    <UCard class="mb-6">
      <template #header>
        <h2 class="text-lg font-semibold">Notifications</h2>
      </template>

      <div class="space-y-4">
        <UToggle v-model="settings.emailNotifications" label="Email Notifications" />
        <UToggle v-model="settings.pushNotifications" label="Push Notifications" />
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Theme</h2>
      </template>

      <UButtonGroup v-model="settings.theme" :options="themes" />
    </UCard>
  </div>
</template>

<script setup>
const themes = ['Light', 'Dark', 'System']

const settings = ref({
  displayName: 'John Doe',
  email: 'john@example.com',
  emailNotifications: true,
  pushNotifications: false,
  theme: 'Light'
})
</script>