<template>
  <div class="min-h-screen bg-gray-50">
    <TopMenu />
    <div class="flex min-h-[calc(100vh-64px)]">
      <SideMenu class="flex-shrink-0" />
      <main class="flex-1 p-6">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>