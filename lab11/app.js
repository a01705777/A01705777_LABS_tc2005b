console.log("Bienvenido al Lab 11");

//Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Routeador para utilizar el modulo de nombres, en la carpeta Routes
const rutasNombres = require('./routes/nombres');
const rutasTareas = require('./routes/tareas');
const rutasInicio = require('./routes/inicio'); 

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', rutasInicio);
app.use('/tareas', rutasTareas);
app.use('/nombres', rutasNombres);

app.use( (request, response, next) => {
    response.status(404).send('<h1> Page Not Found </h1>');
});

app.listen(3000);


