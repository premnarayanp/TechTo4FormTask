import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import userRoutes from './src/features/user/user.routes.js';
import userTypesRoutes from './src/features/userTypes/userTypes.routes.js';

dotenv.config();

const app = express();
// Middleware---------------------------
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Added extended option
app.use(express.json());
app.use('/uploads', express.static('uploads')); //this will excess all images

// Routes-------------------------------
app.use('/api/users', userRoutes);
app.use('/api/usersTypes', userTypesRoutes);
export default app;