import {StatusCodes} from 'http-status-codes';
import { errorsResponse } from '../../utils/common/error-response.js';
import AppError from '../../utils/error/app-error.js';

function validateCity(req, res, next) {
    if(!req.body.name ) {
        errorsResponse.message = "Not able to create a City";
        errorsResponse.error =  new AppError(["City Name is required"],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...errorsResponse
              
        });
    }
    next();
}

export {validateCity};