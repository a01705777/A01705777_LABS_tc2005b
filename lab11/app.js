console.log("Ya no tengo que andar reiniciando el servidor gracias a nodemon!!");

//Basic Express Structure
const express = require('express');
const app = express();

//Middleware
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

app.use('/', (request, response, next) => { 
    console.log('Middleware!');
    response.send('<h1> Middleware! </h1>');
});


app.listen(3000);


