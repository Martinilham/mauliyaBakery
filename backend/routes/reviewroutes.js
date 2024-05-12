import express from 'express'
import { deleteReview, getReview, getReviewbyID, saveReview } from '../controllers/reviewControllers.js';

const router = express.Router();

router.get('/review',getReview);
router.get('/review/:id',getReviewbyID);
router.post('/review',saveReview);
router.delete('/review/:id',deleteReview)

export default router