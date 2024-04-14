<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="credentials.email" type="email" placeholder="Email" required>
      <input v-model="credentials.password" type="password" placeholder="Password" required>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: { email: '', password: '' }
    };
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', this.credentials)
          .then(() => this.$router.push('/dashboard'))
          .catch(err => alert('Login failed: ' + err.message));
    }
  }
};
</script>
