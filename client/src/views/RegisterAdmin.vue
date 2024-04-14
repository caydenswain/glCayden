<template>
  <div>
    <h2>Register Admin</h2>
    <form @submit.prevent="register">
      <input v-model="admin.name" type="text" placeholder="Name" required>
      <input v-model="admin.email" type="email" placeholder="Email" required>
      <input v-model="admin.password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admin: { name: '', email: '', password: '' }
    };
  },
  methods: {
    register() {
      this.$store.dispatch('auth/registerAdmin', this.admin)
          .then(() => this.$router.push('/dashboard'))
          .catch(err => alert('Registration failed: ' + err.message));
    }
  }
};
</script>
