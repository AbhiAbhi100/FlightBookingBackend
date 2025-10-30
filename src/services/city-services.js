import CityRepository from '../repositories/city-repo.js';
import Apperror from '../../utils/error/app-error.js';
import { StatusCodes} from "http-status-codes";


async function createCity(data){
     try {
        const City = await CityRepository.create(data);
        return City;
    } catch (error) {
        console.log(error)
        if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push( err.message);
            });
            console.log(explanation)
            throw new Apperror(explanation , StatusCodes.BAD_REQUEST);
        }
         throw new Apperror("Something went wrong in the City service layer", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function destroyCity(id) {
     try{
        const city =  await CityRepository.destroy(id);
        return city

    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror('The City you requested is not presented ', error.statusCode)
        }
         throw new Apperror("Cannot fetch data of cities ", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}


export default {
    createCity, destroyCity
};