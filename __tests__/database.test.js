'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const { sequelize } = require('../src/models');
const request = supertest(server.app);

let title = 'Halo 3';
let genre = 'FPS';
let releaseYear = 2007;

// let newTitle = 'Halo Three';

let name = 'PS3';
let manufacturer = 'Sony';
let gameCount = 0;

// This is a jest function which will run the callback BEFORE doing anything else
beforeAll(async () => {
  await sequelize.sync();
  console.log('Synced');
});

// This is a jest function which will run the callback AFTER doing the other tests
afterAll(async () => {
  console.log('Dropped!');
  await sequelize.drop();
});

describe('Testing the CRUD features of our API for the Game model', () => {
  /*{
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }*/
  
  test('Should create a game', async () => {
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
    // This returns all games in the form of a body, which is an array of data based on the contents of the table
    // The array contains objects with key-value pairs matching the models
    let response = await request.get('/game'); 

    expect(response.status).toEqual(200);
    expect(response.body[0].title).toEqual(title);
    expect(response.body[0].genre).toEqual(genre);
    expect(response.body[0].releaseYear).toEqual(releaseYear);
  });

  test('Should get one game', async () => {
    let id = 1;

    let response = await request.get(`/game/${id}`); 

    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual(title);
    expect(response.body.genre).toEqual(genre);
    expect(response.body.releaseYear).toEqual(releaseYear);
  });

  test('Should update a game', () => {
    expect(true).toEqual(false);
  });

  test('Should delete a game', () => {
    expect(true).toEqual(false);
  });
});

describe('Testing the CRUD features of our API for the platform model', () => {
  /*{
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gameCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }*/

  test('Should create a platform', async () => {
    let response = await request.post('/platform').send({
      name,
      manufacturer,
      gameCount,
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual(name);
    expect(response.body.manufacturer).toEqual(manufacturer);
    expect(response.body.gameCount).toEqual(gameCount);
  });

  test('Should get all platforms', async () => {
    let response = await request.get('/platform'); 

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual(name);
    expect(response.body[0].manufacturer).toEqual(manufacturer);
    expect(response.body[0].gameCount).toEqual(gameCount);
  });

  test('Should get one platform', async () => {
    let id = 1;

    let response = await request.get(`/platform/${id}`); 

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual(name);
    expect(response.body.manufacturer).toEqual(manufacturer);
    expect(response.body.gameCount).toEqual(gameCount);
  });

  test('Should update a platform', async () => {
    await expect(true).toEqual(false);
  });

  test('Should delete a platform', async () => {
    await expect(true).toEqual(false);
  });
});