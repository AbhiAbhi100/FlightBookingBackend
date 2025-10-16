import {StatusCodes} from 'http-status-codes';
import { errorsResponse } from '../../utils/common/error-response.js';
import AppError from '../../utils/error/app-error.js';

function validateAirplane(req, res, next) {
    if(!req.body.modelNumber ) {
        errorsResponse.message = "Not able to create an airplane";
        errorsResponse.error =  new AppError(["Model Number is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    next();
}

export {validateAirplane};