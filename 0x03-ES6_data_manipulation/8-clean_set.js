export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0 || typeof startString !== 'string') {
    return '';
  }

  let finalValue = '';
  set.forEach((item) => {
    if (item && typeof item === 'string' && item.startsWith(startString)) {
      finalValue += `${item.slice(startString.length)}-`;
    }
  });

  return finalValue.slice(0, -1);
}
