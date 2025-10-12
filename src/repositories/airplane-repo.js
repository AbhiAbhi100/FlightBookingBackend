
import db from '../models/index.js';
import CrudRepository from './crud-repositories.js';

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(db.Airplane); 
  }
}

export default new AirplaneRepository();
