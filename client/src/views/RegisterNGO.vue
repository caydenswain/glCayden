<template>
  <div class="ngo-registration-form">
    <h2>NGO Registration</h2>
    <form @submit.prevent="registerNGO">
      <div>
        <label for="pocEmail">Point of Contact Email:</label>
        <input type="email" id="pocEmail" v-model="ngo.pocEmail" placeholder="Enter contact email" required>
      </div>
      <div>
        <label for="organizationName">Organization Name:</label>
        <input type="text" id="organizationName" v-model="ngo.organizationName" placeholder="Enter organization name" required>
      </div>
      <div>
        <label for="areasOfConcern">Areas of Concern:</label>
        <textarea id="areasOfConcern" v-model="ngo.areasOfConcern" placeholder="Describe areas of concern"></textarea>
      </div>
      <div>
        <button type="submit" :disabled="isSubmitting">Register</button>
        <p v-if="message">{{ message }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Ensure axios is installed and imported

export default {
  data() {
    return {
      ngo: {
        pocEmail: '',
        organizationName: '',
        areasOfConcern: ''
      },
      isSubmitting: false,
      message: ''
    };
  },
  methods: {
    async registerNGO() {
      this.isSubmitting = true;
      this.message = '';
      try {
        const response = await axios.post('/api/ngo/register', this.ngo);
        this.message = 'Registration successful!';
        // Clear form or handle next steps
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
  width: 100%;
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
