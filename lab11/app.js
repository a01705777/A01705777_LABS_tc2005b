console.log("Ya no tengo que andar reiniciando el servidor gracias a nodemon!!");

//Basic Express Structure
const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => { 
    console.log('Middleware!');
    next();         //Vamos al siguiente use...
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('Aqui se acaba con send');
});

app.listen(3000);


