const request = require('supertest');
const app = require('../app'); // Ensure you export your Express app in app.js
const User = require('../models/User');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('User Registration', () => {
    it('should register a new user', async () => {
        const userData = { name: 'Test User', email: 'test@example.com', password: 'password123' };
        const response = await request(app)
            .post('/api/auth/register')
            .send(userData);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token'); // Expecting a token in the response
    });

    it('should not register a user with an existing email', async () => {
        const userData = { name: 'Test User', email: 'test@example.com', password: 'password123' };
        await new User(userData).save(); // Pre-save user to simulate duplicate scenario
        const response = await request(app)
            .post('/api/auth/register')
            .send(userData);
        expect(response.statusCode).toBe(400);
    });
});
