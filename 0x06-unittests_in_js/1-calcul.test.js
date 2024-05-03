const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('Rounds and sums two floating point numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 8.9, 10.6), 20);
  });
  it('Maintains whole numbers as such and adds them', () => {
    assert.strictEqual(calculateNumber('SUM', 10, 10), 20);
  });
  it('Adds two negative numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -2, -18), -20);
  });
  it('Round up two negative floating point numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -8.9, -10.6), -20);
  });
  it('Divide whole numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 26, 13), 2);
  });
  it('Divide by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 20, 0), 'Error');
  });
  it('Subtract two whole numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 20, 0), 20);
  });
  it('Subtract floating point values', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('Divide floating point values', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
})
