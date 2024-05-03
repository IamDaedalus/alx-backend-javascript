const Utils = {};

Utils.calculateNumber = (type, a, b) => {
  const ar = Math.round(a);
  const br = Math.round(b);

  if (type === 'DIVIDE') {
    if (br === 0) {
      return 'Error';
    }
    return ar / br;
  } else if (type === 'SUM') {
    return ar + br;
  } else if (type === 'SUBTRACT') {
    return ar - br;
  }
};

module.exports = Utils;
