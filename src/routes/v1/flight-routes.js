import express from 'express';
import { createflight,getAllFlights, getFlight, updateSeat } from '../../controllers/flight-controller.js';
import { validateFlight, validateUpdateSeats } from '../../middlewares/Flight-middleware.js';

const router = express.Router();

// POST /api/v1/flight
/**
 * @swagger
 * /api/v1/flight:
 *   post:
 *     summary: Create a new flight
 *     tags: [Flight]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - flightNumber
 *               - airplaneId
 *               - departureAirportId
 *               - arrivalAirportId
 *               - departureTime
 *               - arrivalTime
 *               - price
 *               - totalSeats
 *             properties:
 *               flightNumber:
 *                 type: string
 *               airplaneId:
 *                 type: number
 *               departureAirportId:
 *                 type: number
 *               arrivalAirportId:
 *                 type: number
 *               departureTime:
 *                 type: string
 *               arrivalTime:
 *                 type: string
 *               price:
 *                 type: number
 *               totalSeats:
 *                 type: number
 *     responses:
 *       201:
 *         description: Flight created successfully
 */
    router.post('/',validateFlight,createflight);

//GET /api/v1/flight 
 /**
 * @swagger
 * /api/v1/flight:
 *   get:
 *     summary: Get flights
 *     tags: [Flight]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Flight details fetched
 *       404:
 *         description: Flight not found
 */
    router.get('/',getAllFlights);

// Get /api/v1/flight/ :id
    /**
 * @swagger
 * /api/v1/flight/{id}:
 *   get:
 *     summary: Get flight by ID
 *     tags: [Flight]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Flight details fetched
 *       404:
 *         description: Flight not found
 */
    router.get('/:id',getFlight);

    // PATCH /api/v1/flight/:id/seats
/**
 * @swagger
 * /api/v1/flight:
 *   patch:
 *     summary: updated a flight
 *     tags: [Flight]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - flightNumber
 *               - airplaneId
 *               - departureAirportId
 *               - arrivalAirportId
 *               - departureTime
 *               - arrivalTime
 *               - price
 *               - totalSeats
 *             properties:
 *               flightNumber:
 *                 type: string
 *               airplaneId:
 *                 type: number
 *               departureAirportId:
 *                 type: number
 *               arrivalAirportId:
 *                 type: number
 *               departureTime:
 *                 type: string
 *               arrivalTime:
 *                 type: string
 *               price:
 *                 type: number
 *               totalSeats:
 *                 type: number
 *     responses:
 *       201:
 *         description: Flight updated successfully
 */
    router.patch('/:id/seats',validateUpdateSeats,updateSeat
    )

export default router;
