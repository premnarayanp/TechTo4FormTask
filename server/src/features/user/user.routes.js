import express from 'express';
// import passport from 'passport';
import userController from './user.controller.js';

const router = express.Router();

router.post('/create', userController.create);
router.get('/allUser', userController.allUser);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.deleteUser);

export default router;