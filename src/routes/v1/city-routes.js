import express from 'express';
import  {createCity}  from '../../controllers/city-controller.js';


const router = express.Router();

// POST /api/v1/city
    router.post('/', createCity);

export default router;
