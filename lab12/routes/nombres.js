const express = require('express');
const router = express.Router();
const fileSystem = require('fs');

//Array of names
const names = [];
let names_string = "Personas que entraron a tu pagina web: " + "\n";

//Get y Post con BodyParser
router.get('/nuevo-nombre', (request, response, next) => {
    response.send('<p><h3>Escribe tu nombre: </h3></p> <form action="/nombres/nuevo-nombre" method="POST"> <input type="text" name="nombre"> <input type="submit" value="Enviar"></form>');
});

router.post('/nuevo-nombre', (request, response, next) => {
    console.log('Nombre: ' + request.body.nombre);      
    
    //Save name in var, array, string and File
    let nombre = request.body.nombre;
    names.push(nombre);
    names_string += nombre + "\n";
    fileSystem.writeFileSync('nombres.txt', names_string);

    response.status(302);
    response.redirect('/nombres');
});

router.get('/', (request, response, next) => {
    let html = '<h2> Personas que han ingresado a tu pagina </h2>';
    html += '<ol>';
    for(nombre of names) {
        html += '<li>' + nombre + '</li>';
    } 
    html += '</ol>';

    html += '<div><h2>';
    html += 'Para ingresar más nombres, agrega la ruta /nuevo-nombre !';
    html += '</h2></div>';

    response.send(html);
});


router.use( (request, response, next) => {
    response.status(404).send('<h1>Page Not Found </h1>');
});

module.exports = router;