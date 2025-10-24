import express from 'express';
import { createAirplane, destroyAirplane,getAirplane,getAirplanes,updateAirplane } from '../../controllers/airplane-controller.js';
import { validateAirplane } from '../../middlewares/airplane-middleware.js';

const router = express.Router();

// POST /api/v1/airplanes
    router.post('/', 
    validateAirplane,
    createAirplane);
// Get /api/v1/airplanes
    router.get('/', getAirplanes);
    // Get /api/v1/airplane/id
    router.get('/:id', getAirplane);
    // delete /api/v1/airplanes/id
    router.delete('/:id', destroyAirplane)
    // patch /api/v1/airplanes/id
    router.patch('/:id',updateAirplane)

export default router;
