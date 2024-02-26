import express from 'express'
import {
    getUser,
    getUserById,
    saveUser,
    updateUser,
    deleteUser,
    registUser,
    loginUser
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/user',getUser);
router.get('/user/:id',getUserById);
router.post('/daftar',registUser);
router.get('/daftar',getUser);
router.post('/login',loginUser);
router.post('/user',saveUser);
router.patch('/user/:id',updateUser);
router.delete('/user/:id',deleteUser)

export default router