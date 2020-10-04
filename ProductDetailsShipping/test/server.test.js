//const supertest = require('supertest');
const app = require('../server/index.js');
//const request = supertest(app);
const mongoose = require('mongoose');

test('Sanity check', () => {
  expect(1+1).toBe(2);
});

// tests not fully complete yet
// regenerator runtime is not defined???
// Error: cannot log after tests are done. did you forget to wait for something async in your test?

describe('Main API endpoints test', () => {

  it('Get product information from the id endpoint', async () => {
    const res = await app.get('/api/product/1');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Get product information from the id endpoint', async () => {
    const res = await app.get('/api/shipping/Canada/123456');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

})