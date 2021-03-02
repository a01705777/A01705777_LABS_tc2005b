console.log("Ya no tengo que andar reiniciando el servidor gracias a nodemon!!");

//Array of names
const names = [];

//Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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

//Get y Post con BodyParser
app.get('/nuevo-nombre', (request, response, next) => {
    response.send('<p><h3>Escribe tu nombre: </h3></p> <form action="/nombres" method="POST"> <input type="text" name="nombre"> <input type="submit" value="Enviar"></form>');
});

app.post('/nombres', (request, response, next) => {
    console.log(request.body);          //Regresa un JSON con la informacion
    console.log('Nombre directo: ' + request.body.nombre);      //Esto es 1 linea en comparacion coon las muchas otras del Buffer y todo eso en el lab10
    response.send('<h1> Nombres: </h1> ');
});

app.use('/nombres', (request, response, next) => {
    let html = '<h1> Personas que han ingresado a tu pagina </h1>';
    html += '<ol>';
    for(nombre of names) {
        html += '<li>' + nombre + '</li>';
    } 
    html += '</ol>';

    response.send(html);
});

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


