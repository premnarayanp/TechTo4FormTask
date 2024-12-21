import express from 'express';
// import passport from 'passport';
import userTypesController from './userTypes.controller.js';

const router = express.Router();

router.post('/create', userTypesController.create);
router.get('/allUserTypes', userTypesController.allUserTypes);
router.put('/update/:id', userTypesController.update);
router.delete('/delete/:id', userTypesController.deleteUserTypes);

export default router;