export default function appendToEachArrayValue(arr, appendStr) {
  for (const idx of arr) {
    if (arr[idx]) {
      const value = arr[idx];
      arr[idx] = appendStr + value;
    }
  }

  return arr;
}
