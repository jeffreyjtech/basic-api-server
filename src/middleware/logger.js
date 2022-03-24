'use strict';

function logger(req, res, next) {
  console.log(`Logging request \n method: ${req.method} \n path: ${req.path}`);
  next();
}

module.exports = logger;