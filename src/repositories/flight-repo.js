import { Sequelize } from 'sequelize';
import db from '../models/index.js';
import CrudRepository from './crud-repositories.js';
import { addRawLockFlights } from './queries.js';


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

  async updateRemainingSeats(flightId, seats, dec = true){
    await db.Flight.sequelize.query(addRawLockFlights(flightId));
    const flight = await db.Flight.findByPk(flightId);
    if (dec){
      await db.Flight.decrement('totalSeats', {by : seats, where : {id : flightId}});
    } else{
      console.log('dec value:', dec, 'type:', typeof dec, 'parsed:', parseInt(dec));
     await db.Flight.increment('totalSeats', {by : seats, where : {id : flightId}});
    }
    return flight;
  }
}

export default new FlightRepository();
