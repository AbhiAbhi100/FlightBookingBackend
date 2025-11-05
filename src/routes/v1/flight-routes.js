import express from 'express';
import { createflight,  } from '../../controllers/flight-controller.js';
import { validateFlight } from '../../middlewares/Flight-middleware.js';

const router = express.Router();

// POST /api/v1/airplanes
    router.post('/', 
    validateFlight,
    createflight);

    

export default router;
