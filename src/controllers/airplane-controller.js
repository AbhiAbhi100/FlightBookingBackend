import airplaneservice from '../services/airplane-services.js';
import { StatusCodes } from 'http-status-codes';
import {errorsResponse} from '../../utils/common/error-response.js';
import {success} from '../../utils/common/success-response.js';


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
        console.log(error);
        errorsResponse.error = error;
        return res
        .status(error.statusCode)
        .json({
            ...errorsResponse,
        })
    }
}
export {createAirplane};