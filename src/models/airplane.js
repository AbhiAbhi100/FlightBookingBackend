
'use strict';
import { Model, DataTypes } from 'sequelize';

export default class Airplane extends Model {
  static initModel(sequelize) {
    Airplane.init(
      {
        modelNumber: { type: DataTypes.STRING, allowNull: false },
        capacity: { type: DataTypes.INTEGER, allowNull: false, defaultValue:0 },
      },
      {
        sequelize,
        modelName: 'Airplane',
      }
    );
    return Airplane;
  }
}

