import express from 'express';
import { createAirplane } from '../../controllers/airplane-controller.js';
import { validateAirplane } from '../../middlewares/airplane-middleware.js';
import { getAirplanes } from '../../controllers/airplane-controller.js';
import { getAirplane } from '../../controllers/airplane-controller.js';

const router = express.Router();

// POST /api/v1/airplanes
    router.post('/', 
    validateAirplane,
    createAirplane);

    router.get('/', getAirplanes);
    router.get('/:id', getAirplane);

export default router;
