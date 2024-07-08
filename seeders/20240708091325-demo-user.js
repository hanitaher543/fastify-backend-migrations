'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = { 
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'hani@example.com',
        fullname: 'Hani TAHER',
        password : '123456789',
        telephone : '58952100',
     
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};