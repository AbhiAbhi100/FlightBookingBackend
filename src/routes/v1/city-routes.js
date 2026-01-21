import express from 'express';
import  {createCity}  from '../../controllers/city-controller.js';
import { validateCity } from '../../middlewares/city-middleware.js';
import { destroyCity, updateCity, getCity } from '../../controllers/city-controller.js';


const router = express.Router();

//GET/api/vi/city/
/**
 * @swagger
 * /api/v1/city:
 *   get:
 *     summary: get a city
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: City fetched
 */
    router.get('/', getCity);

// POST /api/v1/city
/**
 * @swagger
 * /api/v1/cities:
 *   post:
 *     summary: Create a city
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: City created
 */
    router.post('/',validateCity, createCity,);

// DELETE /api/v1/city/:id
/**
 * @swagger
 * /api/v1/cities:
 *   delete:
 *     summary: delete a city
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: City deleted
 */
    router.delete('/:id', destroyCity);

// patch /api/v1/city/:id
/**
 * @swagger
 * /api/v1/cities:
 *  patch:
 *     summary: update a city
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: City updated
 */
    router.patch('/:id', updateCity);
   

export default router;
