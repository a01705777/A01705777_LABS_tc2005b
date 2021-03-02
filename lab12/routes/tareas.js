
const express = require('express');
const router = express.Router();

router.get('/html', (request, response, next) => {
    console.log('Estas en html');
    response.send('<h1> Tarea HTML </h1>');
});

module.exports = router;