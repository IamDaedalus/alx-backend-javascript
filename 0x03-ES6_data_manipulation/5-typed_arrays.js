export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const bufView = new DataView(buffer);
  bufView.setInt8(position, value);

  return bufView;
}
