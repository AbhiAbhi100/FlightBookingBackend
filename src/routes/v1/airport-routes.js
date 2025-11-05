import express from 'express';
import { createAirport, getAirports, getAirport, destroyAirport, updateAirport } from '../../controllers/airport-controller.js';
import { validateAirports } from '../../middlewares/airport-middleware.js';

const router = express.Router();

// POST /api/v1/airports
    router.post('/', 
    validateAirports,
    createAirport);
// Get /api/v1/airplorts
    router.get('/', getAirports);
    // Get /api/v1/airplorts/id
    router.get('/:id', getAirport);
    // delete /api/v1/airports/id
    router.delete('/:id', destroyAirport)
    // update /api/v1/airports/id
    router.patch('/:id', 
    validateAirports,
    updateAirport)
   

export default router;
