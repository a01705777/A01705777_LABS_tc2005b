const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-Auth');

// Controlador
const nombresController = require('../controllers/nombres_controller');

/*
router.get('/nuevo-nombre', nombresController.getNuevoNombre);

router.post('/nuevo-nombre', nombresController.postNuevoNombre);
*/

router.get('/:id_usuario', isAuth, nombresController.getUsuarioEspecifico);

router.post('/:id_usuario', isAuth, nombresController.postUsuarioEspecifico);   // Cambio de imagen

router.get('/', isAuth, nombresController.get);

router.use('/', nombresController.use);

module.exports = router;