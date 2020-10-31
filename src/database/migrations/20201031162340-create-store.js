'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stores', {
      id: {
        primaryKey: true,
        unique: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phones: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      socialMedia: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      currency: {
        type: Sequelize.STRING,
        defaultValue: 'usd'
      },
      nit: {
        type: Sequelize.STRING
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Stores');
  }
};