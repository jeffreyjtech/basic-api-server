'use strict';

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('platform', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gameCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};