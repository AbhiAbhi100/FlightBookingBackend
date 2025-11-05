
import airplaneRepository from '../repositories/airplane-repo.js';
import Apperror from '../../utils/error/app-error.js';
import { StatusCodes} from "http-status-codes";

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
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
         throw new Apperror("Something went wrong in the airplane service layer", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirplanes() {
    try{
        const airplanes =  await airplaneRepository.getAll();
        return airplanes

    }catch(error){
         throw new Apperror("Cannot fetch data of all airplanes ", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function getAirplane(id) {
    try{
        const airplane =  await airplaneRepository.get(id);
        return airplane

    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror('The airplane you requested is not presented ', error.statusCode)
        }
         throw new Apperror("Cannot fetch data of all airplanes ", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function destroyAirplane(id) {
     try{
        const airplane =  await airplaneRepository.destroy(id);
        return airplane

    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror('The airplane you requested is not presented ', error.statusCode)
        }
         throw new Apperror("Cannot destroy airplanes ", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
async function updateAirplane(id , data){
    try {
    const [updated] = await airplaneRepository.update(id, data);

    if (!updated) {
      throw new Apperror(
        "The airplane you requested is not present",
        StatusCodes.NOT_FOUND
      );
    }
    const updatedAirplane = await airplaneRepository.get(id);
    return updatedAirplane;

    }catch(error){
        console.log(error)
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror('The airplane you requested is not presented ', error.statusCode)
        }
        throw new Apperror('Currently not updated ', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default { 
    createAirplane, 
    getAirplanes,
    getAirplane, 
    destroyAirplane,
    updateAirplane 
};
