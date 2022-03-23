'use strict';

const supertest = require('supertest');
const server = require('../server/app.js');
const request = supertest(server.app);


describe('Testing routing and handling of the API', () => {

  test('Should test something', async () => {
    await expect(true).toEqual(false);
  });
});