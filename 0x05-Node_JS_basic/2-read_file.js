const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    const sweList = [];
    const csList = [];

    lines.forEach((line) => {
      const l = line.trim(); // Trim the line
      if (l.length > 0) {
        const values = l.split(',');
        const studentName = values[0];
        const course = values[values.length - 1];
        if (course === 'SWE') {
          sweList.push(studentName);
        } else if (course === 'CS') {
          csList.push(studentName);
        }
      }
    });

    console.log(`Number of students: ${sweList.length + csList.length}`);
    console.log(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
    console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
