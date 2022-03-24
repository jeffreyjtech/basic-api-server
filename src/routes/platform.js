'use strict';

const express = require('express');

const { PlatformModel } = require('../models');

const router = express.Router();

async function handlePostPlatform (req, res, next) {
  // receive Platform data from the client's HTTP request
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
    
    console.log('Attempting to find one Platform with ID:', id);

    let responseData = await PlatformModel.findOne(options);
    
    console.log(responseData);

    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

async function handlePutPlatform (req, res, next) {
  try{
    let platformToUpdate = req.body;

    console.log('Data to PUT:', platformToUpdate);

    let id = parseInt(req.params.id);

    let options = {
      where: {id: id},
    };
    
    console.log('Attempting to update Platform with ID:', id);

    await PlatformModel.update(platformToUpdate, options);

    let responseData = await PlatformModel.findOne(options);
    
    console.log('Platform PUT-ed');

    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

async function handleDeletePlatform (req, res, next) {
  try{
    let id = parseInt(req.params.id);

    let options = {
      where: {id: id},
    };
    
    console.log('Attempting to delete Platform with ID:', id);

    await PlatformModel.destroy(options);

    let responseData = {nullContainer: undefined};
    responseData.nullContainer = await PlatformModel.findOne(options);
    
    console.log('Platform deleted\n', responseData);

    res.status(200).send(responseData);
  } catch (err) {
    next(err);
  }
}

router.post('/platform', handlePostPlatform);
router.get('/platform', handleGetAllPlatforms);
router.get('/platform/:id', handleGetPlatform);
router.put('/platform/:id', handlePutPlatform);
router.delete('/platform/:id', handleDeletePlatform);


module.exports = router;
