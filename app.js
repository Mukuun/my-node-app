const http = require('http');
const port = 8888;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Docker!\n');
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
