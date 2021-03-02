const express = require('express');

const router = express.Router();


//Array of names
const names = [];

/*
Modelo de ruta con router
router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});
*/

//Get y Post con BodyParser
router.get('/nuevo-nombre', (request, response, next) => {
    response.send('<p><h3>Escribe tu nombre: </h3></p> <form action="/nombres/nuevo-nombre" method="POST"> <input type="text" name="nombre"> <input type="submit" value="Enviar"></form>');
});

router.post('/nuevo-nombre', (request, response, next) => {
    console.log(request.body);          //Regresa un JSON con la informacion
    console.log('Nombre directo: ' + request.body.nombre);      //Esto es 1 linea en comparacion coon las muchas otras del Buffer y todo eso en el lab10
    names.push(request.body.nombre);
    response.redirect('/nombres');
});

router.use('/', (request, response, next) => {
    let html = '<h3> Personas que han ingresado a tu pagina </h3>';
    html += '<ol>';
    for(nombre of names) {
        html += '<li>' + nombre + '</li>';
    } 
    html += '</ol>';

    response.send(html);
});

module.exports = router;