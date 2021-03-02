const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    console.log('Estas en la Pagina Principal');
    let inicio = "<html>";

    //HEAD
    inicio += '<head><meta charset="UTF-8"><title> Rafa Hinojosa </title></head>';

    //BODY
    inicio += "<body>"; 
    inicio += "<header><h1>Bienvenidos a mi sitio web </h1>";
        
    //MAIN
    inicio += "<main>";
    
    //Un poco sobre mi 
    inicio += "<br>";
    inicio += "<section>";
    inicio += "<header><h2> Un poco sobre mi </h2></header>";
    inicio += "<p> Hola! Soy Rafael Hinojosa López y estudio el 4to semestre de Ingeniería en Tecnologías Computacionales.</p>";
    inicio += "<p> En este sitio te compartiré algunas de mis pasiones y hobbies. Mis datos de contacto los encontrarás en la última sección de la página.</p>";
    inicio += "</section>";

    inicio += "</main>";
    inicio += "</body>";
    inicio += "</html>";

    response.send(inicio);
});


module.exports = router;
