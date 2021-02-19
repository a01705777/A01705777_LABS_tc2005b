//Ejemplo de servidor

//Hacer servidor 
const http = require('http');
const server = http.createServer( (request, response) => {
    //Cada vez que se ingresa o refresca la página localhost:PUERTO, en la consola se imprime esto: 
    console.log("Hola ingresa a http://localhost:" + PUERTO); 
    
    //Imprimir en http://localhost:PUERTO
    response.setHeader('Content-Type', 'text/html'); 
    response.write("Hola desde el servidor");     
    response.write("<h1>Hola desde el servidor</h1>");
    response.end(); 
});

//Parámetro es el PUERTO...
var PUERTO = 3000; 
server.listen(PUERTO); 


