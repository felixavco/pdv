'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryLog = sequelize.define('InventoryLog', {
    // id: DataTypes.UUID,
    productCode: DataTypes.STRING,
    productName: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    user: DataTypes.STRING
  }, {});
  InventoryLog.associate = function ({ User }) {
    InventoryLog.belongsTo(User, { foreignKey: 'id', onDelete: 'CASCADE' });
  };
  return InventoryLog;
};