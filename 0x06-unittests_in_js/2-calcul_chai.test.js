const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('Rounds and sums two floating point numbers', () => {
    expect(calculateNumber('SUM', 8.9, 10.6)).to.equal(20);
  });
  it('Maintains whole numbers as such and adds them', () => {
    expect(calculateNumber('SUM', 10, 10)).to.equal(20);
  });
  it('Adds two negative numbers', () => {
    expect(calculateNumber('SUM', -2, -18)).to.equal(-20);
  });
  it('Round up two negative floating point numbers', () => {
    expect(calculateNumber('SUM', -8.9, -10.6)).to.equal(-20);
  });
  it('Divide whole numbers', () => {
    expect(calculateNumber('DIVIDE', 26, 13)).to.equal(2);
  });
  it('Divide by zero', () => {
    expect(calculateNumber('DIVIDE', 20, 0)).to.equal('Error');
  });
  it('Subtract two whole numbers', () => {
    expect(calculateNumber('SUBTRACT', 20, 0)).to.equal(20);
  });
  it('Subtract floating point values', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('Divide floating point values', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
})
