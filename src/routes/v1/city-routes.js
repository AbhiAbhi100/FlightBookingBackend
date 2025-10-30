import express from 'express';
import  {createCity}  from '../../controllers/city-controller.js';
import { validateCity } from '../../middlewares/city-middleware.js';


const router = express.Router();

// POST /api/v1/city
    router.post('/',validateCity, createCity,);

export default router;
