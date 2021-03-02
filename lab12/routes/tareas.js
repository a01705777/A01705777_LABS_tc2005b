
const express = require('express');
const router = express.Router();

router.get('/html', (request, response, next) => {
    console.log('Estas en html');
    response.send('<h1> Tarea HTML </h1>');
});

router.use('/', (reques, response, next) => {
    console.log('Estas en tareas');
    response.send('<h1> Tareas </h1>');
})

module.exports = router;