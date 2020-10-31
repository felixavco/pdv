const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');


'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    secondLastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    storeId: DataTypes.UUID,
    role: DataTypes.INTEGER,
    permissions: DataTypes.INTEGER
  }, {});
  User.associate = function ({ Transaction, InventoryLog, Store }) {
    User.belongsTo(Store, { foreignKey: 'id', onDelete: 'CASCADE' });
    User.hasMany(Transaction);
    User.hasMany(InventoryLog);
  };

  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(12);
    user.id = uuidv4();
    user.password = await bcrypt.hash(user.password, salt);
    return user;
  });

  return User;
};