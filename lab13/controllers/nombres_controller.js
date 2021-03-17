const Nombre = require('../models/nombres_model');

// Get Nuevo Nombre
exports.getNuevoNombre = (request, response, next) => {
    response.render('nuevo-nombre', {
        titulo: 'Nuevo Nombre'
    });
};

// Post Nuevo Nombre
exports.postNuevoNombre = (request, response, next) => {
      //Aqui recibo lo que envio por post
    //   console.log(request.body.edad);      
      const new_name = new Nombre (request.body.nuevo_nombre, request.body.edad, '');
      new_name.save();
  
      response.status(302);
      response.redirect('/nombres');
};

// Lista de nombres
exports.get = (request, response, next) => {
    const names = Nombre.fetchAll();
    response.render('nombres', {
        titulo:'Nombres', 
        lista_nombres: names    // Tomamos los datos del modelo
    });
};

exports.postDeleteNombre = (request, response, next) => {
    Nombre.deleteLast();
    response.status(302);
    response.redirect('/nombres');
};

// 404 Page Not Found
exports.use = (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
};