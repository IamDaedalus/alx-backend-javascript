export default function appendToEachArrayValue(arr, appendStr) {
    for (const idx in arr) {
        const value = arr[idx];
        arr[idx] = appendStr + value;
    }

    return arr;
}
