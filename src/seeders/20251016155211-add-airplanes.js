'use strict';
import { Op } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
 await queryInterface.bulkInsert('Airplanes', [
  {
    modelNumber : 'airbus380',
    capacity : 900,
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    modelNumber : 'buslog45',
    capacity : 590,
    createdAt : new Date(),
    updatedAt : new Date()
  }
 ])
}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  await queryInterface.bulkDelete('Airplanes',
     {
      [Op.or]: 
      [{modelNumber : 'buslog45'}, 
        {modelNumber: 'airbus380'}
      ]
    })
}
