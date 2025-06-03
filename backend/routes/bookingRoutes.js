import express from 'express';
import { confirmBooking } from '../controllers/bookingController.js';

const router = express.Router();
router.post('/confirm', confirmBooking);

export default router;
