const { v4: uuidv4 } = require('uuid');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    // id: DataTypes.UUID,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phones: DataTypes.ARRAY(DataTypes.STRING),
    socialMedia: DataTypes.ARRAY(DataTypes.STRING),
    currency: DataTypes.STRING,
    nit: DataTypes.STRING
  }, {});
  Store.associate = function ({ User, Product }) {
    Store.hasMany(User, { foreignKey: 'id' });
    Store.hasMany(Product, { foreignKey: 'id' });
  };

  Store.beforeCreate(store => store.id = uuidv4());

  return Store;
};