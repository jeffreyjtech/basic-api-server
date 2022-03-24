'use strict';

const { CustomerCollection, sequelize } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the collection interface', () => {
  test('Should create a customer', async () => {
    const newCustomer = {name: 'Jeffrey'};

    let customerInstance = await CustomerCollection.create(newCustomer);

    expect(customerInstance.name).toEqual(newCustomer.name);
  });

  // test('Should read customers and include orders', async () => {
  // });
});