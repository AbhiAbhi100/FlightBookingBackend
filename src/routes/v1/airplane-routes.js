import express from 'express';
import { createAirplane } from '../../controllers/airplane-controller.js';

const router = express.Router();

// POST /api/v1/airplanes
router.post('/', createAirplane);

export default router;
