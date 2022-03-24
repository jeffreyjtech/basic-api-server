'use strict';

const { sequelize } = require('./src/models');

const { start } = require('./src/server.js');

sequelize.sync()
  .then(() => {
    console.log('Synced database!');
  })
  .catch(console.error);

start();
