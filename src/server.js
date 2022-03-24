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
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');

// Use route-agnostic modules
app.use(logger);

// Use route modules
app.use(gameRoute);
app.use(platformRoute);

// Use error-handler modules
app.use(handle404);
app.use(handle500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running on PORT ', PORT);
    });
  },
};
