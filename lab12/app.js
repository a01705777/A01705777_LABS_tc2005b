console.log("Bienvenido al Lab 12");

//Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

//EJS 
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routers para acceder a la carpeta de rutas
const rutasInicio = require('./routes/inicio');
const rutasNombres = require('./routes/nombres');
const rutasTareas = require('./routes/tareas');

//Middleware

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//Acceder a los archivos de la carpeta Public
app.use(express.static(path.join(__dirname, 'public')));

//Rutas a utilizar
app.use('/', rutasInicio);
app.use('/nombres', rutasNombres);
app.use('/tareas', rutasTareas);
app.use( (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
});

app.listen(3000);



