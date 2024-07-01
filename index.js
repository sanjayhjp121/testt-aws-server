const http = require('http');
const port = 80; // Change to 80 if you want to use the default HTTP port

const requestHandler = (request, response) => {
  response.end('Hello, World!');
};

const server = http.createServer(requestHandler);

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});