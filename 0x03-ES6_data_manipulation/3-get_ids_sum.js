export default function getStudentIdsSum(arr) {
  return Array.isArray(arr) ? arr.reduce((sum, item) => sum + item.id, 0) : 0;
}
