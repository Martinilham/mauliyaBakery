import express from 'express'
import {
    getBarang,
    getBarangById,
    saveBarang,
    updateBarang,
    deleteBarang
} from '../controllers/barangControllers.js';

const router = express.Router();

router.get('/barang',getBarang);
router.get('/barang/:id',getBarangById);
router.post('/barang',saveBarang);
router.patch('/barang/:id',updateBarang);
router.delete('/barang/:id',deleteBarang)

export default router