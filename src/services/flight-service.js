
import FlightRepository from '../repositories/flight-repo.js';
import Apperror from '../../utils/error/app-error.js';
import { StatusCodes} from "http-status-codes";
import { compareTimeStrings } from '../../utils/helper/datetime-helper.js';
import { Op } from 'sequelize';




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
async function isArrivalAfterDeparture(arrivalTime, departureTime) {
    return compareTimeStrings(arrivalTime, departureTime);
}

async function getAllFlights(query) {
    let customfilter = {};
    let sortFilter = [];

    if (query.trips) {
        const [departureAirportId, arrivalAirportId] = query.trips.split("-");

        customfilter.departureAirportId = departureAirportId;
        customfilter.arrivalAirportId = arrivalAirportId;
    }

    if(query.price){
       const [minPrice, maxPrice] = query.price.split("-");
        customfilter.price = {
            [Op.between] : [minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]
        }
        if(query.travellers){
            customfilter.totalSeats = {
                [Op.gte] : query.travellers  // gte means greater than equal to 
            }
        }
    }
   if (query.tripDate) {
    const clean = query.tripDate.trim();
    const startDate = new Date(`${clean}T00:00:00Z`); // UTC
    const endDate  = new Date(`${clean}T23:59:59Z`); // UTC

    customfilter.departureTime = {
        [Op.between]: [startDate, endDate]
    };

    console.log(startDate, endDate);
}
if(query.sort){
    const params = query.sort.split(',')
    const sortFilters = params.map((params) => params.split('_'));
    sortFilter = sortFilters
}

    try {
        const flights = await FlightRepository.getAllFlights(customfilter);
        return flights;
    } catch (error) {
        throw new Apperror(
            "Cannot fetch data of all flights",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}


export default { 
    createFlight, 
    isArrivalAfterDeparture,
    getAllFlights,
    
};
