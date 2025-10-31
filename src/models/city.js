
'use strict';
import { Model, DataTypes } from 'sequelize';

export default class City extends Model {
  static associations(models) {
    this.hasMany(models.Airport, {
      foreignKey: 'cityId'
    });
  }

  static initModel(sequelize) {
    City.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      },
      {
        sequelize,
        modelName: 'City'
      }
    );
    return City;
  }
}
