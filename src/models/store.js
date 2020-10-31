'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phones: DataTypes.STRING,
    socialMedia: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    nit: DataTypes.STRING
  }, {});
  Store.associate = function (models) {
    // associations can be defined here
  };
  return Store;
};