'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    secondLastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    storeId: DataTypes.STRING,
    role: DataTypes.NUMBER,
    permissions: DataTypes.NUMBER
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};