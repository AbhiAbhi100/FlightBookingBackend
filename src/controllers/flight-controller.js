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
async function isArrivalAfterDeparture(arrivalTime, departureTime){
    try{
        const result = await flightservice.isArrivalAfterDeparture(arrivalTime, departureTime);
        success.data = {isArrivalAfterDeparture : result};
        success.message = "Successfully compared arrival and departure times";
        return res
        .status(StatusCodes.OK)
        .json({
            ...success,
        })
    }catch(error){
        console.log(error);
        errorsResponse.error = error;
        return res
        .status(error.statusCodes)
        .json({
            ...errorsResponse,
        })
    }
}
async function getAllFlights(req,res){
    try {
        const flights = await flightservice.getAllFlights(req.query);
        success.data = flights;
        return res
             .status(StatusCodes.CREATED)
             .json(success)
    } catch (error) {
        console.error("Error fetching flights:", error);
        errorsResponse.message = "Failed to fetch flights";
        errorsResponse.error = error;
        return res
            .status(error.statusCode)
            .json({
            ...errorsResponse})
    }
}
/**
 * 
 * GET : /Flight/: id
 * body : {}
 */
async function getFlight(req, res) {
    try{
       const Flight = await flightservice.getFlight(req.params.id);
       success.data = Flight;
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
 
async function updateSeat(req, res){
    console.log('updateSeat HIT');
   try {
    const response = await flightservice.updateSeats({
        flightId : req.params.id,
        seats: req.body.noOfSeats,
        dec : req.body.dec
    });
    success.data = response;
    return res
    .status(StatusCodes.OK)
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


export {createflight,getAllFlights, getFlight , updateSeat};