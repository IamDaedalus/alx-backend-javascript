export default function hasValuesFromArray(set, arr) {
  const setToArr = Array.from(set);
  return arr.filter((x) => !setToArr.includes(x)).length === 0;
}
