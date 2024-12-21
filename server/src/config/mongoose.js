import dotenv from "dotenv";
dotenv.config();

import mongoose from 'mongoose';

const connectDB = async () => {
    const URL = "mongodb://127.0.0.1/schooling_services";
    try {
        // await mongoose.connect(process.env.MONGO_DB_URL, {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;


