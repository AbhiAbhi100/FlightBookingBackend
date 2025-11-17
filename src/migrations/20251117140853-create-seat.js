'use strict';
import { DataTypes } from "sequelize";
import { SEAT_TYPE } from '../../utils/common/enum.js';
const {BUSINESS, PREMIUM_ECONOMY, FIRST_CLASS, ECONOMY} = SEAT_TYPE;
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Seats', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    airplaneId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Airplanes',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    row: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    col: {
      type: Sequelize.STRING,
      allowNull: false
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
            },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Seats');
}