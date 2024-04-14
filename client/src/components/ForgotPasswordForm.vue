<template>
  <div class="forgot-password-form">
    <h2>Reset Password</h2>
    <form @submit.prevent="submitEmail">
      <input type="email" v-model="email" placeholder="Enter your email" required>
      <button type="submit">Send Reset Link</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async submitEmail() {
      // Implement sending reset link logic
    }
  }
};
</script>
