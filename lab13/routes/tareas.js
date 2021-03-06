const express = require('express');
const router = express.Router();

const tareasController = require('../controllers/tareas_controller');

router.get('/html', tareasController.getHTML);

router.get('/css', tareasController.getCSS);

router.get('/js', tareasController.getJS);

router.get('/', tareasController.get);

router.use('/', tareasController.use);

module.exports = router;


