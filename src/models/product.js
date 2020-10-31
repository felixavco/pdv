'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: DataTypes.UUID,
    productCode: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    unitPrice: DataTypes.FLOAT,
    storeId: DataTypes.UUID,
    discount: DataTypes.FLOAT
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};