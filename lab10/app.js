console.log("Ingresa a http://localhost:3000 desde tu navegador");
console.log("Hola desde node");

const http = require('http');
const requestHandler = require('./routes');
const server = http.createServer( requestHandler );

server.listen(3000);
