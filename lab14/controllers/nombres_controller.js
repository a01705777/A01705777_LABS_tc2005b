const Nombre = require('../models/nombres_model');

// Get Nuevo Nombre
exports.getNuevoNombre = (request, response, next) => {
    response.render('nuevo-nombre', {
        titulo: 'Nuevo Nombre'
        //isLoggedIn: if(request.session.isLoggedIn === true) ? true : false
    });
};

// Post Nuevo Nombre
exports.postNuevoNombre = (request, response, next) => {
    //Aqui recibo lo que envio por post
    console.log(request.body.nuevo_nombre);      
    const new_name = new Nombre (request.body.nuevo_nombre);
    new_name.save();

    // Hacemos una cookie
    response.setHeader('Set-Cookie', ['ultimo_usuario =' + new_name.nombre + '; HttpOnly']);
    
    response.status(302);
    response.redirect('/nombres');
};

// Lista de nombres
exports.get = (request, response, next) => {
    const names = Nombre.fetchAll();
    
    // Imprimir valor de cookie
    // console.log('Cookie: ' + request.get('Cookie'));
    // request.get('Cookie').split(';')[1].trim().split('=')[1];
    console.log(request.cookises);
    console.log(request.cookies.ultimo_usuario);

    response.render('nombres', {
        titulo:'Nombres', 
        lista_nombres: names    // Tomamos los datos del modelo
        //isLoggedIn: if(request.session.isLoggedIn === true) ? true : false
    });
};

// 404 Page Not Found
exports.use = (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
};