import express from 'express';
import { createflight,getAllFlights, getFlight, updateSeat } from '../../controllers/flight-controller.js';
import { validateFlight, validateUpdateSeats } from '../../middlewares/Flight-middleware.js';

const router = express.Router();

// POST /api/v1/flight
    router.post('/', 
    validateFlight,
    createflight);
//GET /api/v1/flight 
    router.get('/',
        getAllFlights
    );
    // Get /api/v1/flight/ :id
    router.get('/:id',getFlight);

    // PATCH /api/vi/flight/:id/seats
    router.patch('/:id/seats', 
        validateUpdateSeats,
        updateSeat
    )

export default router;
