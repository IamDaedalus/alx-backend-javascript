const fs = require('fs');
const express = require('express');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School');
});

app.get('/students', (req, res) => {
  const fileName = process.argv[2];

  countStudents(fileName)
    .then((data) => {
      res.statusCode = 200;
      res.end(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.statusCode = 500;
      res.end(error.message);
    });
});

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

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

      const stats = `Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}\n`
                 + `Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`;
      resolve(stats);
    });
  });
}

app.listen(port);

module.exports = app
