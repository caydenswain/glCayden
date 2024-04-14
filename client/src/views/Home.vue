<template>
  <div class="home">
    <h1>Welcome to GuardianLink</h1>
    <p>Select an option:</p>
    <button @click="$router.push('/login')">Login</button>
    <button @click="$router.push('/register-admin')">Register as Admin</button>
    <button @click="$router.push('/register-ngo')">Register as NGO</button>
    <button @click="$router.push('/register-volunteer')">Register as Volunteer</button>
    <button @click="$router.push('/create-account')">Create Account</button>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
button:hover {
  background-color: #0056b3;
}
</style>
