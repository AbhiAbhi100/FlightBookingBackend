import express from "express";
import InfoController from "../../controllers/index.js"
import airplaneRoutes from "./airplane-routes.js";
import cityRoutes from "./city-routes.js";

 const router = express.Router();
 // api/v1/airpalanes/ POST
 router.use('/airplanes', airplaneRoutes);
 // api/v1/city/ POST
 router.use('/city', cityRoutes);

 router.get('/info', InfoController)

 export default router