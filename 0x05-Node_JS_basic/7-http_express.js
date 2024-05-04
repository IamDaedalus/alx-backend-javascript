const express = require('express');
const fs = require('fs');

const app = express();

const port = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }

    // Process the data and send the response
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

    const stats = `Number of students: ${sweList.length + csList.length}\n`
               + `Number of students in CS: ${csList.length}. List: ${csList.join(', ')}\n`
               + `Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`;
    
    res.setHeader('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${stats}`);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
