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
const rutasNombres = require('./routes/nombres');
const rutasTareas = require('./routes/tareas');

//Middleware

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//Acceder a los archivos de la carpeta Public
app.use(express.static(path.join(__dirname, 'public')));

//Rutas a utilizar
app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'inicio.html'));
})
app.use('/tareas', rutasTareas);
app.use('/nombres', rutasNombres);
app.use( (request, response, next) => {
    response.status(404).send('<h1> Page Not Found </h1>');
});

app.listen(3000);



