console.log("Ya no tengo que andar reiniciando el servidor gracias a nodemon!!");

//Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path');

//Routeador para utilizar el modulo de nombres, en la carpeta Routes
const rutasNombres = require('./routes/nombres');
const rutasTareas = require('./routes/tareas');

//Middleware

//Utilizar body Parser:
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/tareas', rutasTareas);

app.use('/nombres', rutasNombres);

app.get('/personal', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'personal.html'));
})

app.get('/', (request, response, next) => {
    console.log('Estas en sobre mi');
    response.send('Sobre mi');
});


app.use( (request, response, next) => {
    response.statusCode = 404;  //Cambiar valor a variable
    response.status(404);       //Setter, cambia valor internamente...
    console.log('Page not found');
    response.send('Page not found');

    //response.status(404).send('Recurso no encontrado');
});

app.listen(3000);


