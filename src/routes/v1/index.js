import express from "express";
import InfoController from "../../controllers/index.js"
import airplaneRoutes from "./airplane-routes.js";

 const router = express.Router();
 // api/v1/airpalanes/ POST
 router.use('/airplanes', airplaneRoutes);

 router.get('/info', InfoController)

 export default router