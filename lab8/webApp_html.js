//Hacer servidor
const http = require('http'); 
const server = http.createServer( (request, response) => {
    console.log("Hola, alguien ingreso a tu página web"); 

    response.setHeader('Content-Type', 'text/html'); 
    response.
}); 


const PUERTO = 3000; 
console.log("Hola, ingresa a http://localhost." + PUERTO + " desde tu navegador"); 
server.listen(PUERTO); 
