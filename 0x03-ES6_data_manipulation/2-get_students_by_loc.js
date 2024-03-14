export default function getStudentByLocation(arr, city) {
  return arr.filter((item) => item.location === city);
}
