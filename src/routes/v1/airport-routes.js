import express from 'express';
import { createAirport, getAirports, getAirport, destroyAirport, updateAirport } from '../../controllers/airport-controller.js';
import { validateAirports } from '../../middlewares/airport-middleware.js';

const router = express.Router();

// POST /api/v1/airports
/**
 * @swagger
 * /api/v1/airports:
 *   post:
 *     summary: Create a new airport
 *     tags: [Airport]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - cityId
 *             properties:
 *               name:
 *                 type: string
 *               cityId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Airport created
 */
    router.post('/',validateAirports,createAirport);

// Get /api/v1/airport
/**
 * @swagger
 * /api/v1/airport:
 *   get:
 *     summary: get airports
 *     tags: [Airport]
 *     responses:
 *       200:
 *         description: Airports fetched
 */
    router.get('/', getAirports);

    // Get /api/v1/airplort/id
/**
 * @swagger
 * /api/v1/airport/{id}:
 *   get:
 *     summary: get a airport
 *     tags: [Airport]
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *             - id
 *           properties:
 *             name:
 *               type: string
 *             cityId:
 *               type: number
 *     responses:
 *       201:
 *         description: Airport fetched
 */
    router.get('/:id', getAirport);

    // delete /api/v1/airports/id
/**
 * @swagger
 * /api/v1/airport/{id}:
 *  delete:
 *     summary: delete a airport
 *     tags: [Airport]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *     responses:
 *       201:
 *         description: Airport deleted
 */
    router.delete('/:id', destroyAirport)

    // update /api/v1/airports/id
/**
 * @swagger
 * /api/v1/airports:
 *   patch:
 *     summary: update a airport
 *     tags: [Airport]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - cityId
 *             properties:
 *               name:
 *                 type: string
 *               cityId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Airport updated
 */
    router.patch('/:id',validateAirports,updateAirport)
   

export default router;
