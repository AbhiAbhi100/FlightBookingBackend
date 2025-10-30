import express from 'express';
import  {createCity}  from '../../controllers/city-controller.js';
import { validateCity } from '../../middlewares/city-middleware.js';
import { destroyCity } from '../../controllers/city-controller.js';


const router = express.Router();

// POST /api/v1/city
    router.post('/',validateCity, createCity,);
// DELETE /api/v1/city/:name
    router.delete('/:id', destroyCity);

export default router;
