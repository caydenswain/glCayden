// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api', // Change this to your API base URL
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance;
