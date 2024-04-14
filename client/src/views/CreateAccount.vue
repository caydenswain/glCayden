<template>
  <div class="create-account">
    <h2>Create Account</h2>
    <button @click="$router.push('/register-admin')">Admin</button>
    <button @click="$router.push('/register-ngo')">NGO</button>
    <button @click="$router.push('/register-volunteer')">Volunteer</button>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount'
};
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}
button:hover {
  background-color: #0056b3;
}
</style>
npm