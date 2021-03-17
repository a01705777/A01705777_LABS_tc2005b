const express = require('express');
const router = express.Router();

// Controlador
const nombresController = require('../controllers/nombres_controller');

router.get('/nuevo-nombre', nombresController.getNuevoNombre);

router.post('/nuevo-nombre', nombresController.postNuevoNombre);

router.get('/', nombresController.get);

router.use('/', nombresController.use);

module.exports = router;