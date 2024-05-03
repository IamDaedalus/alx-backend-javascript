const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Rounds and sums two floating point numbers', () => {
    assert.strictEqual(calculateNumber(8.9, 10.6), 20);
  });
  it('Maintains whole numbers as such and adds them', () => {
    assert.strictEqual(calculateNumber(10, 10), 20);
  });
  it('Adds two negative numbers', () => {
    assert.strictEqual(calculateNumber(-2, -18), -20);
  });
  it('Round up two negative floating point numbers', () => {
    assert.strictEqual(calculateNumber(-8.9, -10.6), -20);
  });
})

