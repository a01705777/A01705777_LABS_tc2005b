const express = require('express');
const router = express.Router();
const path = require('path');

// Controlador
const nombresController = require('../controllers/nombres_controller');

const names = ['Rafa', 'Fio'];

router.get('/nuevo-nombre', nombresController.getNuevoNombre);

router.post('/nuevo-nombre', nombresController.postNuevoNombre);

router.get('/', nombresController.get);

router.use('/', nombresController.use);

module.exports = router;