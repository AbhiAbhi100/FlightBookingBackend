import airplaneservice from '../services/airplane-services.js';
import { StatusCodes } from 'http-status-codes';
import {error} from '../utils/errors/common/error-response.js';
import {success} from '../utils/errors/common/success-response.js';


/**
 * 
 * POST : /airplanes
 * body : {modelNumber, capacity}
 */

async function createAirplane(req, res){
    try{
        console.log(req.body);
        const airplane = await airplaneservice.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        success.data = airplane;
        success.message = "Successfully created the airplane";
        return res 
        .status(StatusCodes.CREATED)
        .json({
            ...success,
        })

    }catch(error){
        error.error = error;
        error.message = "Not able to create the airplane";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ...error,
        })
    }
}
export {createAirplane};