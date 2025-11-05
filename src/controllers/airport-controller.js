import airportservice from '../services/airport-services.js';
import { StatusCodes } from 'http-status-codes';
import {errorsResponse} from '../../utils/common/error-response.js';
import {success} from '../../utils/common/success-response.js';

async function createAirport(req, res){
    try{
        console.log(req.body);
        const airport = await airportservice.createAirport({
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId : req.body.cityId
        });
        success.data = airport;
        success.message = "Successfully created the airport";
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

async function getAirports(req, res) {
    try{
       const airports = await airportservice.getAirports();
       success.data = airports;
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

async function getAirport(req, res) {
    try{
       const airport = await airportservice.getAirport(req.params.id);
       success.data = airport;
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

async function destroyAirport(req, res) {
    try{
       const airport = await airportservice.destroyAirport(req.params.id);
       success.data = airport;
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

async function updateAirport(req, res){
    try {
        const id = req.params.id
        const {name, cityId } = req.body
        const [update] = await airportservice.updateAirport(id,{
            name, cityId
        } )
        success.data = update
        success.message = "Successfully updated the airport";
        return res 
        .status(StatusCodes.OK)
        .json({
            ...success,
        })
    }catch(error){
        console.log(req.body)
         errorsResponse.error = error;
        return res
        .status(error.statusCode )
        .json({
            ...errorsResponse,
        })
    }
}

export {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};