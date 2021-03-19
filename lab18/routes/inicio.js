const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-Auth');

const inicioController = require('../controllers/inicio_controller');

router.get('/', isAuth, inicioController.get);

module.exports = router;
