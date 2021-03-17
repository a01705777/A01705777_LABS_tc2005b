console.log("Bienvenido al Lab 14");

//Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const session = require('express-session');

var cookieParser = require('cookie-parser');

//EJS 
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routers para acceder a la carpeta de rutas
const rutasInicio = require('./routes/inicio');
const rutasNombres = require('./routes/nombres');
const rutasTareas = require('./routes/tareas');
const rutasUsers = require('./routes/users');

//Middleware

//BodyParser para acceder facilmente a datos de las formas 
app.use(bodyParser.urlencoded({ extended: false }));

//Para acceder a los valores de las cookies
app.use(cookieParser());

//Para trabajar con sesiones
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Acceder a los archivos de la carpeta Public
app.use(express.static(path.join(__dirname, 'public')));

//Rutas a utilizar
app.use('/', rutasInicio);
app.use('/usuarios', rutasUsers);
app.use('/nombres', rutasNombres);
app.use('/tareas', rutasTareas);
app.use( (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
});

app.listen(3000);



