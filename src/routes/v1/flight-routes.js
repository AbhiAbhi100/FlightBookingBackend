import express from 'express';
import { createflight,getAllFlights  } from '../../controllers/flight-controller.js';
import { validateFlight } from '../../middlewares/Flight-middleware.js';

const router = express.Router();

// POST /api/v1/flight
    router.post('/', 
    validateFlight,
    createflight);
//GET /api/v1/flight 
    router.get('/',
        getAllFlights
    );

export default router;
