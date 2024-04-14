
// Mongoose db part for db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbUri = process.env.MONGO_URI;
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
