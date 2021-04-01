const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-Auth');

const tareasController = require('../controllers/tareas_controller');

router.get('/html', isAuth, tareasController.getHTML);

router.get('/css', isAuth, tareasController.getCSS);

router.get('/js', isAuth, tareasController.getJS);

router.get('/', isAuth, tareasController.get);

router.use('/', tareasController.use);

module.exports = router;


