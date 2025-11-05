import express from "express";
import InfoController from "../../controllers/index.js"
import airplaneRoutes from "./airplane-routes.js";
import cityRoutes from "./city-routes.js";
import airportRoutes from "./airport-routes.js";
import flightRoutes from "./flight-routes.js";

 const router = express.Router();
 // api/v1/airpalanes/ POST
 router.use('/airplanes', airplaneRoutes);
 // api/v1/city/ POST
 router.use('/city', cityRoutes);
    // api/v1/airport/ POST
router.use('/airport', airportRoutes);
// api/v1/flight/ POST
router.use('/flight', flightRoutes);

 router.get('/info', InfoController)

 export default router