'use strict';

const express = require('express');

const { GameModel } = require('../models');

const router = express.Router();

async function handlePostGame (req, res, next) {
  // receive Game data from the client's HTTP request
  let newGameData = req.body;

  // query to the DB
  let responseData = await GameModel.create(newGameData);

  res.status(201).send(responseData);
}

router.post('/game', handlePostGame);

module.exports = router;