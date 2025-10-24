
import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Airplane from './airplane.js';
import City from './city.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load config.json
const configPath = path.join(__dirname, '../config/config.json');
const configFile = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

// Initialize Sequelize
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Initialize models
const db = {};
db.Airplane = Airplane.initModel(sequelize);
db.City = City.initModel(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
