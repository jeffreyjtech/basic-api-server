'use strict';

// Import dependencies
const express = require('express');

// Use dependencies
const app = express();
app.use(express.json());

// Import modules
const logger = require('./middleware/logger');
const gameRoute = require('./routes/game.js');
const platformRoute = require('./routes/platform.js');
const customerRoute = require('./routes/customer.js');
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');

// Assign PORT
const PORT = process.env.PORT || 3000;

// Use route-agnostic modules
app.use(logger);

// Use route modules
app.use(gameRoute);
app.use(platformRoute);
app.use(customerRoute);

// Use error-handler modules
app.use(handle404);
app.use(handle500);

module.exports = {
  app,
  start: () => {
    app.listen(PORT, () => {
      console.log('App is running on PORT', PORT);
    });
  },
};
