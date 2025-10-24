
import db from '../models/index.js';
import CrudRepository from './crud-repositories.js';

class CityRepository extends CrudRepository {
  constructor() {
    super(db.City); 
  }
}

export default new CityRepository();
