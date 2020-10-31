'use strict';

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    // id: DataTypes.UUID,
    storeId: DataTypes.UUID,
    userId: DataTypes.UUID,
    total: DataTypes.FLOAT,
    products: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Transaction.associate = function ({ User }) {
    Transaction.belongsTo(User, { foreignKey: 'id', onDelete: 'CASCADE' });
  };
  return Transaction;
};