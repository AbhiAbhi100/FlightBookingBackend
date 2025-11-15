
import db from '../models/index.js';
import CrudRepository from './crud-repositories.js';

class FlightRepository extends CrudRepository {
  constructor() {
    super(db.Flight); 
  }
  
 async  getAllFlights(filter, sort) {
    const response = db.Flight.findAll({
      where: filter,
      order: sort
    });
    return response;
  }
}

export default new FlightRepository();
