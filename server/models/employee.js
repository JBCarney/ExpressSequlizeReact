'use strict';
module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    Alias: DataTypes.STRING,
    Name: DataTypes.STRING,
    Nrc: DataTypes.STRING,
    JobTitle: DataTypes.STRING,
    Active: DataTypes.BOOLEAN,
    RetiredDate: DataTypes.DATE,
    BasicSalary: DataTypes.DECIMAL,
    HiredDate: DataTypes.DATE,
    GroupID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employee;
};