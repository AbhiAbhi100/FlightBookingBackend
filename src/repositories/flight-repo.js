import { Sequelize } from 'sequelize';
import db from '../models/index.js';
import CrudRepository from './crud-repositories.js';

class FlightRepository extends CrudRepository {
  constructor() {
    super(db.Flight); 
  }
  
 async getAllFlights(filter, sort) {
    const response = db.Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
    model: db.Airplane,
    as: "airplane"
  },
  {
    model: db.Airport,
    as: "departureAirport",
    include : {
      model : db.City,
      required : true
    }
  },
  {
    model: db.Airport,
    as: "arrivalAirport",
    include : {
      model : db.City,
      required : true
    }

  }
      ]
    });
    return response;
  }
}

export default new FlightRepository();
