const { createServer } = require('http');

const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

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

      const stats = `Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}\n`
                 + `Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`;
      resolve(stats);
    });
  });
}

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
