import express from 'express'
import {
    getUser,
    getUserById,
    saveUser,
    updateUser,
    deleteUser,
    registUser
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/user',getUser);
router.get('/user/:id',getUserById);
router.post('/daftar',registUser);
router.post('/user',saveUser);
router.patch('/user/:id',updateUser);
router.delete('/user/:id',deleteUser)

export default router