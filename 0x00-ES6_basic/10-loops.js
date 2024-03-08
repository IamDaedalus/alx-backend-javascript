export default function appendToEachArrayValue(arr, appendStr) {
  if (arr.length > 0) {
    for (const idx in arr) {
      const value = arr[idx];
      arr[idx] = appendStr + value;
    }
  }

  return arr;
}
