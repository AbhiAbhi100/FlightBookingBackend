'use strict';
import { Model,DataTypes} from 'sequelize';
import { SEAT_TYPE } from '../../utils/common/enum.js';
const {BUSINESS, PREMIUM_ECONOMY, FIRST_CLASS, ECONOMY} = SEAT_TYPE;
 export default class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {foreignKey : 'airplaneId',});
    }
  static initModel(sequelize){
  Seat.init({
    airplaneId:{ 
      type: DataTypes.INTEGER,
      allowNull : false
    },
    row:{type:DataTypes.INTEGER,
      allowNull:false,
    },
    col: {type: DataTypes.STRING,
      allowNull:false,
    },
    type: {
          type: DataTypes.ENUM(
            BUSINESS,
            ECONOMY,
            PREMIUM_ECONOMY,
            FIRST_CLASS
          ),
          allowNull: false,
          defaultValue: ECONOMY
        }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
}}