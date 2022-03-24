'use strict';

const express = require('express');

const { PlatformModel } = require('../models');

const router = express.Router();

async function handlePostPlatform (req, res, next) {

  let newPlatformData = req.body;

  let responseData = await PlatformModel.create(newPlatformData);

  res.send(201).send(responseData);
}

router.post('/platform', handlePostPlatform);

module.exports = router;
