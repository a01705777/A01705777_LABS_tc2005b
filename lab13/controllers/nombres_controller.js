const names = ['Rafa', 'Fio'];

// Get Nuevo Nombre
exports.getNuevoNombre = (request, response, next) => {
    response.render('nuevo-nombre', {
        titulo: 'Nuevo Nombre'
    });
};

// Post Nuevo Nombre
exports.postNuevoNombre = (request, response, next) => {
      //Aqui recibo lo que envio por post
      console.log(request.body.nuevo_nombre);      
      names.push(request.body.nuevo_nombre);
  
      response.status(302);
      response.redirect('/nombres');
};

// Lista de nombres
exports.get = (request, response, next) => {
    response.render('nombres', {
        titulo:'Nombres', 
        lista_nombres: names
    });
};

// 404 Page Not Found
exports.use = (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
};