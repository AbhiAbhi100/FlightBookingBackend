import express from 'express';
import { createAirplane } from '../../controllers/airplane-controller.js';
import { validateAirplane } from '../../middlewares/airplane-middleware.js';

const router = express.Router();

// POST /api/v1/airplanes
router.post('/', 
    validateAirplane,
    createAirplane);

export default router;
