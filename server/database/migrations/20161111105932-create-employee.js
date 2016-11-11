'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Alias: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Nrc: {
        type: Sequelize.STRING
      },
      JobTitle: {
        type: Sequelize.STRING
      },
      Active: {
        type: Sequelize.BOOLEAN
      },
      RetiredDate: {
        type: Sequelize.DATE
      },
      BasicSalary: {
        type: Sequelize.DECIMAL
      },
      HiredDate: {
        type: Sequelize.DATE
      },
      GroupID: {
        type: Sequelize.INTEGER
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Employees');
  }
};