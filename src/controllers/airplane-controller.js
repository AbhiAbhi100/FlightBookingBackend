import airplaneservice from '../services/airplane-services.js';
import { StatusCodes } from 'http-status-codes';


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
        return res 
        .status(StatusCodes.CREATED)
        .json({
            success : true,
            message : "Successfully created an airplane",
            data : airplane,
            error : {}
        })

    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "Not able to create an airplane",
            data : {},
            error : error
        })
    }
}
export {createAirplane};