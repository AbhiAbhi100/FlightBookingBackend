
import FlightRepository from '../repositories/flight-repo.js';
import Apperror from '../../utils/error/app-error.js';
import { StatusCodes} from "http-status-codes";

async function createFlight(data) {
    try {
        const flight = await FlightRepository.create(data);
        return flight;
    } catch (error) {
        console.log(error)
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation)
            throw new Apperror(explanation , StatusCodes.BAD_REQUEST);
        }
         throw new Apperror("Something went wrong in the Flight service layer", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default { 
    createFlight, 
    
};
