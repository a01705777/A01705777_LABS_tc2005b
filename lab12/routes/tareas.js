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
    
    let menu_tareas = '<h1>Tareas</h1>';
    menu_tareas += '<div><h2>';
    menu_tareas += 'Intenta buscar las rutas /html, /css y /js !';
    menu_tareas += '</h2></div>';
    
    response.send(menu_tareas);
});

router.use( (request, response, next) => {
    response.status(404).send('<h1> Page Not Found </h1>');
});

module.exports = router;


