'use strict';

const supertest = require('supertest');
const server = require('../server/app.js');
const { sequelize } = require('../collection');
const request = supertest(server.app);

// This is a jest function which will run the callback BEFORE doing anything else
beforeAll();

// This is a jest function which will run the callback AFTER doing the other tests
afterAll();

describe('Testing the CRUD features of our API', () => {
  test('Should create a person', async () => {
    await expect(true).toEqual(false);
  });

  test('Should get a person', async () => {
    await expect(true).toEqual(false);
  });

  test('Should update a person', async () => {
    await expect(true).toEqual(false);
  });

  test('Should delete a person', async () => {
    await expect(true).toEqual(false);
  });
});