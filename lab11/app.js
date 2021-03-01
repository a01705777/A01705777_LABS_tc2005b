console.log("Ya no tengo que andar reiniciando el servidor gracias a nodemon!!");

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
app.get('/nuevo_nombre', (request, response, next) => {
    response.send('<p><h3>Escribe tu nombre: </h3></p> <form action="/nombres" method="POST"> <input type="text" name="nombre"> <input type="submit" value="Enviar"></form>');
});

app.post('/nombres', (request, response, next) => {
    console.log(request.body);          //Regresa un JSON con la informacion
    console.log('Nombre directo: ' + request.body.nombre);
    response.send('<h1> Nombres: </h1> ');
});

app.use('/', (request, response, next) => {
    console.log('Middleware!');
    response.send('<h1> Middleware! </h1>');
});


app.listen(3000);


