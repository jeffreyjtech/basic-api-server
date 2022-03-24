'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);


describe('Testing routing and handling of the API', () => {

  test('API responds with 404 to invalid route', async () => {
    let response = await request.get('/');

    expect(response.status).toEqual(404);
  });

  test('API responds with 404 to invalid method', async () => {
    let response = await request.patch('/game');

    expect(response.status).toEqual(404);
  });
});