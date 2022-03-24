'use strict';

const express = require('express');

const { GameModel } = require('../models');

const router = express.Router();

async function handlePostGame (req, res, next) {
  // receive Game data from the client's HTTP request
  try {
    let newGame = req.body;
  
    // query to the DB
    let responseData = await GameModel.create(newGame);

    res.status(201).send(responseData);
  } catch (err) {
    next(err);
  }
}

async function handleGetAllGames (req, res, next) {
  try {
    let responseData = await GameModel.findAll();
    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

async function handleGetGame (req, res, next) {
  try{
    let id = parseInt(req.params.id);

    let options = {where: {id: id}};
    
    console.log('Attempting to find one model with ID:', id);

    let responseData = await GameModel.findOne(options);
    
    console.log(responseData);

    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

async function handlePutGame (req, res, next) {
  try{
    let gameToUpdate = req.body;

    console.log('Data to PUT:', gameToUpdate);

    let id = parseInt(req.params.id);

    let options = {
      where: {id: id},
    };
    
    console.log('Attempting to update Game with ID:', id);

    await GameModel.update(gameToUpdate, options);

    let responseData = await GameModel.findOne(options);
    
    console.log('Game PUT-ed');

    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

async function handleDeleteGame (req, res, next) {
  try{
    let id = parseInt(req.params.id);

    let options = {
      where: {id: id},
    };
    
    console.log('Attempting to delete Game with ID:', id);

    await GameModel.destroy(options);

    let responseData = {nullContainer: undefined};
    responseData.nullContainer = await GameModel.findOne(options);
    
    console.log('Game deleted\n', responseData);

    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

router.post('/game', handlePostGame);
router.get('/game', handleGetAllGames);
router.get('/game/:id', handleGetGame);
router.put('/game/:id', handlePutGame);
router.delete('/game/:id', handleDeleteGame);

module.exports = router;