'use strict';

const express = require('express');
const { CustomerCollection } = require('../models');

const router = express.Router();

async function handlePostCustomer (req, res, next) {
  // receive Customer data from the client's HTTP request
  try {
    let newCustomer = req.body;

    // query to the DB
    let customerInstance = await CustomerCollection.create(newCustomer);

    res.status(201).send(customerInstance);
  } catch (err) {
    next(err);
  }
}

router.post('/customer', handlePostCustomer);

module.exports = router;