import {StatusCodes} from 'http-status-codes';
import { error } from '../utils/errors/common/error-response.js';

function validateAirplane(req, res, next) {
    if(!req.body.modelNumber ) {
        error.message = "Not able to create an airplane";
        error.error = {explanation : "Model Number is required"};
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ 
            ...error
              
        });
    }
    next();
}

export {validateAirplane};