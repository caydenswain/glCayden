<template>
  <div class="volunteer-form">
    <h2>Volunteer Registration</h2>
    <form @submit.prevent="registerVolunteer">
      <div>
        <label for="name">Full Name:</label>
        <input type="text" id="name" v-model="volunteer.name" placeholder="Enter your full name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="volunteer.email" placeholder="Enter your email" required>
      </div>
      <div>
        <label for="hoursAvailable">Hours Available per Week:</label>
        <input type="number" id="hoursAvailable" v-model="volunteer.hoursAvailable" min="1" placeholder="0" required>
      </div>
      <div>
        <label for="backgroundCheck">
          <input type="checkbox" id="backgroundCheck" v-model="volunteer.backgroundCheck">
          I have passed a criminal background check
        </label>
      </div>
      <div>
        <label for="linkedin">LinkedIn Profile URL:</label>
        <input type="url" id="linkedin" v-model="volunteer.linkedin" placeholder="https://linkedin.com/in/yourprofile">
      </div>
      <div>
        <button type="submit" :disabled="isSubmitting">Register</button>
        <p v-if="message">{{ message }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      volunteer: {
        name: '',
        email: '',
        hoursAvailable: 0,
        backgroundCheck: false,
        linkedin: ''
      },
      isSubmitting: false,
      message: ''
    };
  },
  methods: {
    async registerVolunteer() {
      this.isSubmitting = true;
      this.message = '';
      try {
        const response = await axios.post('/api/volunteers/register', this.volunteer);
        this.message = 'Registration successful!';
        // Optionally reset form here
      } catch (error) {
        this.message = 'Registration failed: ' + (error.response?.data?.message || 'Server error');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
input, textarea {
  width: 100%;
  padding: 8px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
