
'use strict';
import { Model, DataTypes } from 'sequelize';

export default class Airplane extends Model {
static associations(models) {
    this.hasMany(models.Flight, {
      foreignKey: 'airplaneId',
      onDelete : 'CASCADE'
    });
  }

  static initModel(sequelize) {
    Airplane.init(
      {
        modelNumber: { type: DataTypes.STRING, allowNull: false,
          validate :{
            isAlphanumeric : true
          }
        },
        capacity: { type: DataTypes.INTEGER, allowNull: false, defaultValue:0, 
          validate: {
          max: 1000 ,}
        }
      },
      {
        sequelize,
        modelName: 'Airplane',
      }
    );
    return Airplane;
  }
}

