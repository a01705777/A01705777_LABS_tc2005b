const express = require('express');
const router = express.Router();

const inicioController = require('../controllers/inicio_controller');

router.get('/', inicioController.get);

module.exports = router;
