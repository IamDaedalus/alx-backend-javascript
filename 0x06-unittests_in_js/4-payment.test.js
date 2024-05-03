const spy = require('sinon').spy;
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');
const expect = require('chai').expect;

describe('calculateNumber', () => {
  it('validate Utils.calculateNumber against sendPaymentRequestToApi', () => {
    const spyCheck = spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spyCheck.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    spyCheck.restore();
  });
});

