
import AirportRepository from '../repositories/airport-repo.js';
import Apperror from '../../utils/error/app-error.js';
import { StatusCodes} from "http-status-codes";

async function createAirport(data) {
    try {
        const airport = await AirportRepository.create(data);
        return airport;
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
         throw new Apperror("Something went wrong in the airport service layer", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirports() {
    try{
        const airports =  await AirportRepository.getAll();
        return airports

    }catch(error){
         throw new Apperror("Cannot fetch data of all airports ", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function getAirport(id) {
    try{
        const airport =  await AirportRepository.get(id);
        return airport

    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror('The airport you requested is not presented ', error.statusCode)
        }
         throw new Apperror("Cannot fetch data of all airport ", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function destroyAirport(id) {
     try{
        const airport =  await AirportRepository.destroy(id);
        return airport

    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror('The airport you requested is not presented ', error.statusCode)
        }
         throw new Apperror("Cannot destory airport ", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function updateAirport(id , data){
    try {
    const [updated] = await AirportRepository.update(id, data);

    if (!updated) {
      throw new Apperror(
        "The airport you requested is not present",
        StatusCodes.NOT_FOUND
      );
    }
    const updatedAirport = await AirportRepository.get(id);
    return updatedAirport;

    }catch(error){
        console.log(error)
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror('The airport you requested is not presented ', error.statusCode)
        }
        throw new Apperror('Currently not updated ', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default { 
    createAirport, 
    getAirports,
    getAirport, 
    destroyAirport,
    updateAirport 
};
