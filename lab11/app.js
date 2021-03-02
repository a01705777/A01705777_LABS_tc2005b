console.log("Bienvenido al Lab 11");

//Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Routeador para utilizar el modulo de nombres, en la carpeta Routes
const rutasNombres = require('./routes/nombres');
const rutasTareas = require('./routes/tareas');

//Middleware
//Utilizar body Parser:
app.use(bodyParser.urlencoded({ extended: false }));

/*
Pendiente...
app.use('/sobre_mi/deportes', (request, response, next) => {
    console.log('Estas en deportes');
    response.send('<h1> Messi the best </h1>');
});

app.use('/sobre_mi/musica', (request, response, next) => {
    console.log('Se va directo a sobre mi por el next');
    next(); //Se va al siguiente que tenga el mismo patron minimo...  '/'
});

app.use('/sobre_mi', (request, response, next) => {
    console.log('Estas en sobre mi');
    response.send('Sobre mi');
});
*/


/* Ejemplo de app.use con otro modulo
app.use('/modulo', nombreRuta); */

app.use('/tareas', rutasTareas);
app.use('/nombres', rutasNombres);

app.get('/', (request, response, next) => {
    console.log('Middleware!');
    response.send('<h1> Middleware! </h1>');
});

app.use( (request, response, next) => {
    response.status(404).send('<h1> Page not found </h1>');
});

app.listen(3000);


