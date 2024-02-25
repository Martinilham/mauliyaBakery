import express from 'express'
import {
    getProduk,
    getProdukById,
    saveProduk,
    updateProduk,
    deleteProduk
} from '../controllers/ProdukControllers.js';

const router = express.Router();

router.get('/produk',getProduk);
router.get('/produk/:id',getProdukById);
router.post('/produk',saveProduk);
router.patch('/produk/:id',updateProduk);
router.delete('/produk/:id',deleteProduk);

export default router