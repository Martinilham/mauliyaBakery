import express from 'express'
import {
    getPesanan,
    getpesananById,
    savePesanan,
    updatePesanan,
    deletePesanan,
    updatePembayaran
} from '../controllers/pesananControllers.js';

const router = express.Router();

router.get('/pesanan',getPesanan);
router.get('/pesanan/:id',getpesananById);
router.post('/pesanan',savePesanan);
router.put('/updatepembayaran/:id',updatePembayaran);
router.patch('/pesanan/:id',updatePesanan);
router.delete('/pesanan/:id',deletePesanan)

export default router