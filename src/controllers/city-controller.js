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

async function destroyCity(req, res) {
    try{
       const city = await cityservices.destroyCity(req.params.id);
       success.data = city;
       return res 
        .status(StatusCodes.OK)
        .json({
            ...success,
        })

    }catch(error){
         errorsResponse.error = error;
        return res
        .status(error.statusCode)
        .json({
            ...errorsResponse,
        })
    }
}

async function updateCity(req, res){
    try {
        const id = req.params.id
        const {name } = req.body
        const update = await cityservices.updateCity(id,{
            name : name
        } )
        success.data = update;
        success.message = "Successfully updated the city";
        return res 
        .status(StatusCodes.OK)
        .json({
            ...success,
        })
    }catch(error){
        console.log(req.body)
         errorsResponse.error = error;
        return res
        .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            ...errorsResponse,
        })
    }
}


export {
    createCity, destroyCity, updateCity
};