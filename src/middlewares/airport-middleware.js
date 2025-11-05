import {StatusCodes} from 'http-status-codes';
import { errorsResponse } from '../../utils/common/error-response.js';
import AppError from '../../utils/error/app-error.js';

function validateAirports(req, res, next) {
    if(!req.body.name ) {
        errorsResponse.message = "Not able to create an airport";
        errorsResponse.error =  new AppError(["Name is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    if(!req.body.code ) {
        errorsResponse.message = "Not able to create an airport";
        errorsResponse.error =  new AppError(["Code is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    if(!req.body.cityId ) {
        errorsResponse.message = "Not able to create an airport";
        errorsResponse.error =  new AppError(["City is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    next();
}

export {validateAirports};