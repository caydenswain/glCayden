<template>
  <div class="admin-dashboard">
    <h2>Admin Dashboard</h2>
    <div v-if="isLoading">
      Loading users...
    </div>
    <div v-else-if="users.length">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button @click="resetPassword(user.id)">Reset Password</button>
            <button @click="deleteUser(user.id)" class="danger">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <p v-else>No users found.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      isLoading: false
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.isLoading = true;
      try {
        const response = await axios.get('/api/users');
        this.users = response.data;
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async resetPassword(userId) {
      if (!confirm("Are you sure you want to reset this user's password?")) return;
      try {
        await axios.post(`/api/users/${userId}/reset-password`);
        alert("Password reset successfully!");
      } catch (error) {
        alert("Failed to reset password:", error);
      }
    },
    async deleteUser(userId) {
      if (!confirm("Are you sure you want to delete this user? This action is irreversible!")) return;
      try {
        await axios.delete(`/api/users/${userId}`);
        this.users = this.users.filter(user => user.id !== userId);
        alert("User deleted successfully!");
      } catch (error) {
        alert("Failed to delete user:", error);
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

button.danger {
  color: white;
  background-color: red;
}
</style>
