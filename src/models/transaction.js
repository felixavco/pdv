'use strict';
const product = require("./product");

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    id: DataTypes.UUID,
    storeId: DataTypes.UUID,
    userId: DataTypes.UUID,
    total: DataTypes.FLOAT,
    products: DataTypes.ARRAY(product)
  }, {});
  Transaction.associate = function (models) {
    // associations can be defined here
  };
  return Transaction;
};