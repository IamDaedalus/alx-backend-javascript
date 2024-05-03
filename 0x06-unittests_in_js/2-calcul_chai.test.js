const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('Testing type=SUM', () => {
    expect(calculateNumber('SUM', 8.9, 10.6)).to.equal(20);
  });
  it('Testing type=DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 26, 13)).to.equal(2);
  });
  it('Testing type=DIVIDE where division is by 0', () => {
    expect(calculateNumber('DIVIDE', 20, 0)).to.equal('Error');
  });
  it('Testing type=SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 20, 0)).to.equal(20);
  });
})
