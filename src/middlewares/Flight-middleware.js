import {StatusCodes} from 'http-status-codes';
import { errorsResponse } from '../../utils/common/error-response.js';
import AppError from '../../utils/error/app-error.js';

function validateFlight(req, res, next) {
    if(!req.body.flightNumber ) {
        errorsResponse.message = "Not able to create an Flight";
        errorsResponse.error =  new AppError(["flightName is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    if(!req.body.airplaneId ) {
        errorsResponse.message = "Not able to create an Flight";
        errorsResponse.error =  new AppError(["airplaneId is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    if(!req.body.departureAirportId ) {
        errorsResponse.message = "Not able to create an Flight";
        errorsResponse.error =  new AppError(["departureairportId is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    if(!req.body.arrivalAirportId ) {
        errorsResponse.message = "Not able to create an Flight";
        errorsResponse.error =  new AppError(["arruvalairportId is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }if(!req.body.arrivalTime) {
        errorsResponse.message = "Not able to create an Flight";
        errorsResponse.error =  new AppError(["arrivalTime is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    if(!req.body.departureTime) {
        errorsResponse.message = "Not able to create an Flight";
        errorsResponse.error =  new AppError(["departureTime is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    if(!req.body.price) {
        errorsResponse.message = "Not able to create an Flight";
        errorsResponse.error =  new AppError(["price is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    if(!req.body.totalSeats) {
        errorsResponse.message = "Not able to create an Flight";
        errorsResponse.error =  new AppError(["totalseats is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    next();
}
// validation for updating seats
function validateUpdateSeats(req, res, next){
    if(!req.body.seats ) {
        errorsResponse.message = "Not able to update a seat";
        errorsResponse.error =  new AppError(["seats is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    next();
}

export {validateFlight, validateUpdateSeats};