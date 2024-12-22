import express from 'express';
import userController from './user.controller.js';
import upload from '../../middleware/uploadFile.js';

const router = express.Router();

// Create User
router.post(
    '/create',
    upload.fields([
        { name: 'avatarImg', maxCount: 1 },
        { name: 'aadharImg', maxCount: 1 },
        { name: 'panCardImg', maxCount: 1 },
    ]),
    userController.create
);

// Get all Users
router.get('/allUser', userController.allUser);

// Update User
router.put(
    '/update/:id',
    upload.fields([
        { name: 'avatarImg', maxCount: 1 },
        { name: 'aadharImg', maxCount: 1 },
        { name: 'panCardImg', maxCount: 1 },
    ]),
    userController.update
);

// Delete User
router.delete('/delete/:id', userController.deleteUser);

export default router;
