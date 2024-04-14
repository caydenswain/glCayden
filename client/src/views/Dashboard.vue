<template>
  <div class="dashboard">
    <h2>User Dashboard</h2>
    <p>Welcome back, {{ user.name }}!</p>
    <div>
      <h3>Your Details</h3>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Role:</strong> {{ user.role }}</p>
      <!-- Additional user-specific content here -->
    </div>
    <!-- Further user-specific interactions can go here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe', // Placeholder data
        email: 'john.doe@example.com',
        role: 'User'
      }
    };
  }
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>
