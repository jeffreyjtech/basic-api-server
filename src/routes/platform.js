'use strict';

const express = require('express');

const { PlatformModel } = require('../models');

const router = express.Router();

async function handlePostPlatform (req, res, next) {
  // receive Game data from the client's HTTP request
  try {
    let newPlatform = req.body;
  
    // query to the DB
    let responseData = await PlatformModel.create(newPlatform);

    res.status(201).send(responseData);
  } catch (err) {
    next(err);
  }
}

async function handleGetAllPlatforms (req, res, next) {
  try {
    let responseData = await PlatformModel.findAll();
    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

async function handleGetPlatform (req, res, next) {
  try{

    let id = parseInt(req.params.id);

    let options = {where: {id: id}};
    
    console.log('Attempting to find one model with ID:', id);

    let responseData = await PlatformModel.findOne(options);
    
    console.log(responseData);

    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

router.post('/platform', handlePostPlatform);
router.get('/platform', handleGetAllPlatforms);
router.get('/platform/:id', handleGetPlatform);

router.post('/platform', handlePostPlatform);

module.exports = router;
