import cityservices from '../services/city-services.js';
import { StatusCodes } from 'http-status-codes';
import {errorsResponse} from '../../utils/common/error-response.js';
import {success} from '../../utils/common/success-response.js';

/**
 * 
 * POST : /cities
 * body : {name : string}
 */
async function createCity(req, res){
    try{
        console.log(req.body);
        const city = await cityservices.createCity({
           name : req.body.name
        });
        success.data = city;
        success.message = "Successfully created the city";
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

export {
    createCity,
};