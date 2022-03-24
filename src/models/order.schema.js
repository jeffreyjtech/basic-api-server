'use strict';

const orderSchema = (sequelize, DataTypes) => {

  return sequelize.define('orders', {
    products: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = orderSchema;