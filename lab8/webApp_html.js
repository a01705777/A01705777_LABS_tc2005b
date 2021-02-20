//Hacer servidor para imprimir HTML de lab 1 (Mi Sitio Web)
const http = require('http'); 
const server = http.createServer( (request, response) => {
    console.log("Hola, alguien ingreso a tu página web"); 

    response.setHeader('Content-Type', 'text/html'); 
    
    //Hacer todo el HTML del lab1 o tal vez otro lab 
    //HEAD
    response.write("<head><title> Rafa Hinojosa </title></head>");

    //BODY
    response.write("<body>"); 
    response.write("<header><h1>Bienvenidos a mi sitio web </h1>");
        
    //MAIN
    response.write("<main>");
    
    response.write("<section>")
    response.write("<header><h2> Un poco sobre mi </h2></header>");
    response.write("<p> Hola! Soy Rafael Hinojosa Lopez y estudio el 4to semestre de Ingenieria en Tecnologias Computacionales.</p>");
    response.write("<p> En este sitio te compartire algunas de mis pasiones y hobbies. Mis datos de contacto los encontraras en la ultima seccion de la pagina.</p>");
    response.write("</section>");
    
    response.write("<section>"); 
    response.write("</section>"); 

    response.write("</main>");
    response.write("</body>");
    
    
    response.end();
}); 


const PUERTO = 3000; 
console.log("Hola, ingresa a http://localhost:" + PUERTO + " desde tu navegador"); 
server.listen(PUERTO); 
