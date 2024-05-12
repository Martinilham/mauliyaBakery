import express from 'express'

import { deleteClient, getClient, getClientbyID, loginClient, saveClient, updateClient } from '../controllers/clientControllers.js';

const router = express.Router();

router.get('/client',getClient);
router.get('/client/:id',getClientbyID);
router.post('/client',saveClient);
router.post('/loginclient',loginClient);
router.patch('/client/:id',updateClient);
router.delete('/client/:id',deleteClient)

export default router