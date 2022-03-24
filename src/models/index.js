'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const gameSchema = require('./game.schema.js');
const platformSchema = require('./platform.schema.js');

const orderSchema = require('./order.schema.js');
const customerSchema = require('./customer.schema.js');
const ICollection = require('./lib/ICollection.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ?
  'sqlite:memory' :
  process.env.DATABASE_URL || 'postgresql://localhost:5432'; // this URL would have username:password before the @. My db has no password

const sequelize = new Sequelize(DATABASE_URL,
  { // Heroku stuff from class repo "class-03"
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

const GameModel = gameSchema(sequelize, DataTypes);
const PlatformModel = platformSchema(sequelize, DataTypes);

const CustomerModel = customerSchema(sequelize, DataTypes);
const OrderModel = orderSchema(sequelize, DataTypes);

CustomerModel.hasMany(OrderModel, { foreignKey: 'customerId', sourceKey: 'id' });
OrderModel.belongsTo(CustomerModel, { foreignKey: 'customerId', targetKey: 'id' });

module.exports = {
  sequelize,
  GameModel,
  PlatformModel,
  // This is where and how to export the models encapsulated with/in the Collection interface.
  CustomerCollection: new ICollection(CustomerModel),
};