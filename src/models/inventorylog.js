'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryLog = sequelize.define('InventoryLog', {
    id: DataTypes.UUID,
    productCode: DataTypes.STRING,
    productName: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    user: DataTypes.STRING
  }, {});
  InventoryLog.associate = function (models) {
    // associations can be defined here
  };
  return InventoryLog;
};