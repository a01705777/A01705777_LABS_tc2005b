const Nombre = require('../models/nombres_model');

// Get Nuevo Nombre
exports.getNuevoNombre = (request, response, next) => {
    response.render('nuevo-nombre', {
        titulo: 'Nuevo Nombre',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
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
    Nombre.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('nombres', {
                titulo:'Nombres', 
                lista_nombres: rows,    // Tomamos los datos del modelo
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
};

// 404 Page Not Found
exports.use = (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
};