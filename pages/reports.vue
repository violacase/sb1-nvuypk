<template>
  <div class="page-container">
    <h1>Reports</h1>
    <div class="reports-grid">
      <div class="report-card">
        <h3>Project Progress</h3>
        <div class="chart-placeholder">Chart will be displayed here</div>
      </div>
      <div class="report-card">
        <h3>Task Distribution</h3>
        <div class="chart-placeholder">Chart will be displayed here</div>
      </div>
      <div class="report-card">
        <h3>Team Performance</h3>
        <div class="chart-placeholder">Chart will be displayed here</div>
      </div>
      <div class="report-card">
        <h3>Time Tracking</h3>
        <div class="chart-placeholder">Chart will be displayed here</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 1rem;
}

.reports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.report-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.report-card h3 {
  color: #1f2937;
  margin-bottom: 1rem;
}

.chart-placeholder {
  background-color: #f3f4f6;
  height: 200px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
</style>