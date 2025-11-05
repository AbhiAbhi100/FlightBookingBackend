import flightservice from '../services/flight-service.js';
import { StatusCodes } from 'http-status-codes';
import {errorsResponse} from '../../utils/common/error-response.js';
import {success} from '../../utils/common/success-response.js';

/**
 * 
 * POST : /flight
 * body : {flightNumber, 
 * airplaneId,
 *  departureAirportId, 
 * arrivalAirportId, 
 * arrivalTime, 
 * departureTime, 
 * price, 
 * boardingGate, 
 * totalSeats
 * }
 */
async function createflight(req, res){
    try{
        console.log(req.body);
        const Flight = await flightservice.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats
        });
        success.data = Flight;
        success.message = "Successfully created the Flight";
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


export {createflight, };