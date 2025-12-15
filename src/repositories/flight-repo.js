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

  async updateRemainingSeats(flightId, seats, dec = true) {
  const transaction = await db.Flight.sequelize.transaction();
  try {
    await db.Flight.sequelize.query(
      addRawLockFlights(flightId),
      { transaction }
    );
    const flight = await db.Flight.findByPk(flightId, { transaction });
    if (dec) {
      await db.Flight.decrement(
        'totalSeats',
        { by: seats, where: { id: flightId }, transaction }
      );
    } else {
      await db.Flight.increment(
        'totalSeats',
        { by: seats, where: { id: flightId }, transaction }
      );
    }

    await transaction.commit();
    return flight;

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

}

export default new FlightRepository();
