console.log("Bienvenido al Lab 18");

//Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();
const multer = require('multer');

var cookieParser = require('cookie-parser');

//EJS 
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routers para acceder a la carpeta de rutas
const rutasInicio = require('./routes/inicio');
const rutasNombres = require('./routes/nombres');
const rutasTareas = require('./routes/tareas');
const rutasUsusarios = require('./routes/usuarios');
const { request } = require('http');

//Middleware

//BodyParser para acceder facilmente a datos de las formas 
app.use(bodyParser.urlencoded({ extended: false }));

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: () => (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

// Multer va despues de bodyParser
//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage  }).single('imgPath')); 

//Para acceder a los valores de las cookies
app.use(cookieParser());

//Para trabajar con sesiones
app.use(session({
    secret: 'akjsp9qnlken9-u-10ijpnl;vk[z=9u1oofaj;aoijfpqoiew', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Acceder a los archivos de la carpeta Public
app.use(express.static(path.join(__dirname, 'public')));

app.use(csrfProtection);

//Rutas a utilizar
app.use('/', rutasInicio);
app.use('/usuarios', rutasUsusarios);
app.use('/nombres', rutasNombres);
app.use('/tareas', rutasTareas);
app.use( (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
});

app.listen(3000);



