const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    process.stdout.write('This is the list of our students\n');
  }
});

app.listen(port, hostname);

module.exports = app;
