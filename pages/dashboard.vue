<template>
  <div class="page-container">
    <h1>Dashboard</h1>
    <div class="dashboard-grid">
      <div class="stat-card">
        <h3>Total Projects</h3>
        <p class="stat-number">12</p>
      </div>
      <div class="stat-card">
        <h3>Active Tasks</h3>
        <p class="stat-number">24</p>
      </div>
      <div class="stat-card">
        <h3>Team Members</h3>
        <p class="stat-number">8</p>
      </div>
      <div class="stat-card">
        <h3>Completed</h3>
        <p class="stat-number">45</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 1rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  color: #4b5563;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
}
</style>