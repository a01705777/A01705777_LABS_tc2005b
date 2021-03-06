const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('inicio', {
        titulo: 'Rafa Hinojosa'
    });
});

module.exports = router;
