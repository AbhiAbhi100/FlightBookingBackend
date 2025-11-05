
import db from '../models/index.js';
import CrudRepository from './crud-repositories.js';

class FlightRepository extends CrudRepository {
  constructor() {
    super(db.Flight); 
  }
}

export default new FlightRepository();
