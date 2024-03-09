export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students) || students.every((student) => typeof student !== 'string')) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
      throw new TypeError('students must be an Array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a string');
    }

    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.every((student) => typeof student !== 'string')) {
      throw new TypeError('students must be an Array of strings');
    }

    this._students = newStudents;
  }
}
