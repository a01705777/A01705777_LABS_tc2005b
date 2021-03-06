const express = require('express');
const router = express.Router();

router.get('/html', (request, response, next) => {
    response.render('html', {
        titulo: 'HTML'
    }); 
});

router.get('/css', (request, response, next) => {
    response.render('css', {
        titulo: 'CSS'
    });
});

router.get('/js', (request, response, next) => {
    response.render('js', {
        titulo: 'JavaScript'
    });
});

router.get('/', (reques, response, next) => {
    console.log('Estas en tareas');
    response.render('tareas', {
        titulo: 'Tareas'
    });
});

router.use( (request, response, next) => {
    // response.status(404).send('<h1> Page Not Found </h1>');
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
});

module.exports = router;


