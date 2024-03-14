export default function newListStudentIds(arr) {
  return Array.isArray(arr) ? arr.map((item) => item.id) : [];
}
