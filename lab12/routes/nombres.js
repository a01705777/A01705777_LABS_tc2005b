const express = require('express');
const router = express.Router();

//Array of names
const names = ['Rafa', 'Fio'];

//Get y Post con BodyParser
router.get('/nuevo-nombre', (request, response, next) => {
    response.render('nuevo-nombre');
});

router.post('/nuevo-nombre', (request, response, next) => {
    //Aqui recibo lo que envio por post
    let nombre = request.body.nuevo-nombre;
    console.log('Nombre: ' + nombre);      
    names.push(nombre);

    response.status(302);
    response.redirect('/nombres');
});

router.get('/', (request, response, next) => {
    response.render('nombres', {
        titulo:'Nombres', 
        lista_nombres:names
    })
});

router.use( (request, response, next) => {
    response.status(404).send('<h1>Page Not Found </h1>');
});

module.exports = router;