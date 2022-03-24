'use strict';

function validator(req, res, next) {
  if (req.query.name === undefined) {
    console.log('Received query with no "name"');
    next(new Error);
  }
  else next();
}

module.exports = validator;