
import db from '../models/index.js';
import CrudRepository from './crud-repositories.js';

class AirportRepository extends CrudRepository {
  constructor() {
    super(db.Airport); 
  }
}

export default new AirportRepository();
