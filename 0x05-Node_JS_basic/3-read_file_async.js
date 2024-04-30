const fs = require('fs');

function generateStudentList(field, students) {
  const studentCount = students.length;
  const studentList = students.join(', ');
  return `Number of students in ${field}: ${studentCount}. List: ${studentList}`;
}

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const stats = calculateStats(data);
      resolve(stats);
    });
});
}

function calculateStats(data) {
    const lines = data.split('\n');
    let lineCount = 0;
    let csStudents = [];
    let sweStudents = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.length === 0)
        continue;

      const values = line.split(',');
      const studentName = values[0];
      const studentCourse = values[values.length - 1];

      if (studentCourse === 'CS') {
        csStudents.push(studentName);
      } else {
        sweStudents.push(studentName);
      }
      lineCount++;
    }

    // print results
    process.stdout.write(`Number of students: ${lineCount}\n`);
    process.stdout.write(generateStudentList('CS', csStudents) + '\n');
    process.stdout.write(generateStudentList('SWE', sweStudents) + '\n');
}

function generateStudentList(field, students) {
  const studentCount = students.length;
  const studentList = students.join(', ');
  return `Number of students in ${field}: ${studentCount}. List: ${studentList}`;
}

module.exports = countStudents
