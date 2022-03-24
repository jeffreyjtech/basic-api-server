'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const { sequelize } = require('../src/models');
const request = supertest(server.app);

// This is a jest function which will run the callback BEFORE doing anything else
beforeAll(async () => {
  await sequelize.sync();
});

// This is a jest function which will run the callback AFTER doing the other tests
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the CRUD features of our API for the Platform model', () => {
  test('Should create a platform', async () => {
    await expect(true).toEqual(false);
  });

  test('Should get all platforms', async () => {
    await expect(true).toEqual(false);
  });

  test('Should get one platform', async () => {
    await expect(true).toEqual(false);
  });

  test('Should update a platform', async () => {
    await expect(true).toEqual(false);
  });

  test('Should delete a platform', async () => {
    await expect(true).toEqual(false);
  });
});