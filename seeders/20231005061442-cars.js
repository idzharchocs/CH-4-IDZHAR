'use strict';

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cars', [{
      id : uuidv4(),
      name: 'Lamborghini',
      image: 'images.jpg',
      capacity: '2',
      rentPerDay:'150000',
      description: 'super car sport',
      availableAt: new Date(),
      createdAt: new Date(),
      updatedAt : new Date()

    },
    {
      id : uuidv4(),
      name: 'Dodge',
      image: 'images1.jpg',
      capacity: '2',
      rentPerDay: '10000',
      description: 'super car sport',
      availableAt: new Date(),
      createdAt: new Date(),
      updatedAt : new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Cars');
  }
};
