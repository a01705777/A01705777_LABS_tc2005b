const express = require('express');
const router = express.Router();

//Array of names
const names = ['Rafa', 'Fio'];

//Get y Post con BodyParser
router.get('/nuevo-nombre', (request, response, next) => {
    response.render('nuevo-nombre', {
        titulo: 'Nuevo Nombre'
    });
});

router.post('/nuevo-nombre', (request, response, next) => {
    //Aqui recibo lo que envio por post
    console.log(request.body.nuevo_nombre);      
    names.push(request.body.nuevo_nombre);

    response.status(302);
    response.redirect('/nombres');
});

router.get('/', (request, response, next) => {
    response.render('nombres', {
        titulo:'Nombres', 
        lista_nombres: names
    })
});

router.use( (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
});

module.exports = router;