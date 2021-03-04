console.log("Ya no tengo que andar reiniciando el servidor gracias a nodemon!!");

//Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Routeador para utilizar el modulo de nombres, en la carpeta Routes
const rutasNombres = require('./routes/nombres');

//Middleware

//Utilizar body Parser:
app.use(bodyParser.urlencoded({ extended: false }));

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

app.use('/html', (request, response, next) => {
    console.log('Estas en html');
    response.send('<h1> Tarea HTML </h1>');
});

/* Ejemplo de app.use con otro modulo
app.use('/modulo', nombreRuta); */

app.use('/nombres', rutasNombres);

app.get('/', (request, response, next) => {
    console.log('Middleware!');
    response.send('<h1> Middleware! </h1>');
});

app.use( (request, response, next) => {
    response.statusCode = 404;  //Cambiar valor a variable
    response.status(404);       //Setter, cambia valor internamente...
    console.log('Page not found');
    response.send('Page not found');

    //response.status(404).send('Recurso no encontrado');
});

app.listen(3000);


