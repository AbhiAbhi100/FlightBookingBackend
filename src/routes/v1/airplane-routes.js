
import express from 'express';
import { createAirplane, destroyAirplane,getAirplane,getAirplanes,updateAirplane } from '../../controllers/airplane-controller.js';
import { validateAirplane } from '../../middlewares/airplane-middleware.js';

const router = express.Router();
// POST /api/v1/airplanes
/**
 * @swagger
 * /api/v1/airplanes:
 *   post:
 *     summary: Create an airplane
 *     tags: [Airplane]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - modelNumber
 *               - capacity
 *             properties:
 *               modelNumber:
 *                 type: string
 *               capacity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Airplane created
 */
    router.post('/',validateAirplane,createAirplane);

// Get /api/v1/airplanes
/**
 * @swagger
 * /api/v1/airplanes:
 *   get:
 *     summary: Get airplanes
 *     tags: [Airplane]
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             modelNumber:
 *               type: string
 *             capacity:
 *               type: number
 *     responses:
 *       201:
 *         description: Airplanes fetched
 */
    router.get('/', getAirplanes);

    // Get /api/v1/airplane/id
/**
 * @swagger
 * /api/v1/airplanes/{id}:
 *   get:
 *     summary: get an airplane
 *     tags: [Airplane]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the airplane to fetch
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Airplane fetched
 */
    router.get('/:id', getAirplane);

    // delete /api/v1/airplanes/id
    /**
 * @swagger
 * /api/v1/airplanes:
 *   delete:
 *     summary: delete an airplane
 *     tags: [Airplane]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              -id
 *     responses:
 *       201:
 *         description: Airplane deleted
 */
    router.delete('/:id', destroyAirplane)

    // patch /api/v1/airplanes/id
    /**
 * @swagger
 * /api/v1/airplanes:
 *   patch:
 *     summary: updated an airplane
 *     tags: [Airplane]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - modelNumber
 *               - capacity
 *             properties:
 *               modelNumber:
 *                 type: string
 *               capacity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Airplane updated
 */

    router.patch('/:id',updateAirplane)

export default router;
