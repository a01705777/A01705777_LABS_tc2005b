const express = require('express');
const router = express.Router();
const path = require('path');

// Controlador
const usersController = require('../controllers/users_controller');

router.get('/login', usersController.getlogin);

router.post('/login', usersController.postlogin);

router.get('/logout', usersController.logout);


module.exports = router;