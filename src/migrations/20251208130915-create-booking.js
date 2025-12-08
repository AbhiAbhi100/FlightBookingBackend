'use strict';
/** @type {import('sequelize-cli').Migration} */
import { BOOKING_Status } from '../../utils/common/enum.js';
const { BOOKED, CANCELLED, INITIATED, PENDING} = BOOKING_Status;
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Bookings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    flightId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM,
      values : [BOOKED, CANCELLED, INITIATED, PENDING],
      defaultValue: INITIATED,
      allowNull: false,
    },
    noOfSeats: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue : 1,

    },
    totalCost: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
  await queryInterface.dropTable('Bookings');
}