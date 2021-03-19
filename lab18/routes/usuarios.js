const express = require('express');
const router = express.Router();
const path = require('path');
const isAuth = require('../util/is-Auth');

// Controlador
const usersController = require('../controllers/users_controller');

router.get('/login', usersController.getlogin);

router.post('/login', usersController.postlogin);

router.get('/signup', usersController.getSignUp);

router.post('/signup', usersController.postSignUp);

router.get('/logout', isAuth, usersController.getlogout);


module.exports = router;