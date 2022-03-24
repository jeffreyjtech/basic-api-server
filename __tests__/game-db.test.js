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

describe('Testing the CRUD features of our API for the Game model', () => {
  test('Should create a game', async () => {
    let title = 'Halo 3';
    let genre = 'FPS';
    let releaseYear = 2007;

    let response = await request.post('/game').send({
      title,
      genre,
      releaseYear,
    });

    expect(response.status).toEqual(201);
    expect(response.body.title).toEqual(title);
    expect(response.body.genre).toEqual(genre);
    expect(response.body.releaseYear).toEqual(releaseYear);
  });

  test('Should get all games', async () => {
    await expect(true).toEqual(false);
  });

  test('Should get one game', async () => {
    await expect(true).toEqual(false);
  });

  test('Should update a game', async () => {
    await expect(true).toEqual(false);
  });

  test('Should delete a game', async () => {
    await expect(true).toEqual(false);
  });
});