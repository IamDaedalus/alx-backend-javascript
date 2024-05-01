const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const stats = () => {
        const lines = data.split('\n');

        const sweList = [];
        const csList = [];

        lines.forEach((line) => {
          line = line.trim(); // Trim the line
          if (line.length > 0) {
            const values = line.split(',');
            const studentName = values[0];
            const course = values[values.length - 1];
            if (course === 'SWE') {
              sweList.push(studentName);
            } else if (course === 'CS') {
              csList.push(studentName);
            }
          }
        });

        console.log(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
        console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`);
      };
      resolve(stats);
    });
  });
}

function calculateStats(data) {
  const lines = data.split('\n');

  const sweList = [];
  const csList = [];

  lines.forEach((line) => {
    line = line.trim(); // Trim the line
    if (line.length > 0) {
      const values = line.split(',');
      const studentName = values[0];
      const course = values[values.length - 1];
      if (course === 'SWE') {
        sweList.push(studentName);
      } else if (course === 'CS') {
        csList.push(studentName);
      }
    }
  });

  console.log(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
  console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`);
} 

module.exports = countStudents
