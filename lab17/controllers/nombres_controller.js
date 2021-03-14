const Nombre = require('../models/nombres_model');

// Get Nuevo Nombre
exports.getNuevoNombre = (request, response, next) => {
    response.render('nuevo-nombre', {
        titulo: 'Registra tus datos',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

// Post Nuevo Nombre (Recibo lo enviado)
exports.postNuevoNombre = (request, response, next) => {
    // nombre: request.body.nuevo_nombre, correo: request.body.nuevo_correo, contrasena: request.body.nueva_contraseña, imagen: request.body.nueva_imagen
    const new_name = new Nombre(request.body.nuevo_correo, 
                                request.body.nuevo_nombre, 
                                request.body.nueva_contraseña, 
                                request.body.nueva_imagen);
    new_name.save()
        .then(() => {
            // Hacemos una cookie
            response.setHeader('Set-Cookie', ['ultimo_usuario =' + new_name.nombre + '; HttpOnly']);
            response.status(302);
            response.redirect('/nombres');
        })
        .catch(err => {
            console.log(err)
        });
};

// Un solo nombre
exports.getNombre = (request, response, next) => {
    const id = request.params.nombre_id;
    Nombre.fetchOne(id)
        .then(([rows, fieldData]) => {
            console.log(rows[0].nombre);
            response.render('nombres', {
                titulo: rows[0].nombre, 
                lista_nombres: rows,    // Tomamos los datos del modelo
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
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