const Nombre = require('../models/nombres_model');

// Lista de nombres segun lo ingresado en el buscador
exports.postBuscar = (request, response, next) => {
    const nombre = request.body.nombreBuscado;
    Nombre.fetchName(nombre) 
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.status(200).json(rows);
        })
        .catch(err => {
            console.log(err);
        });
}

// Muestra un usuario segun el id en la ruta
exports.getUsuarioEspecifico = (request, response, next) => {
    const id = request.params.id_usuario;

    Nombre.fetchOne(id)
        // en rows se guarda la tupla de la consulta hecha en fetchOne
        .then(([rows, fieldData]) => {
            response.render('usuario_especifico', {
                titulo: rows[0].nombre, 
                usuario: rows,    // Mando solo un usuario
                csrfToken: request.csrfToken(), 
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log('El id no existe');
            response.status(404);
            response.render('404', {
                titulo: '404 - Page Not Found'
            });
            console.log(err);
        });
};

// Cambia la imagen del usuario 
exports.postUsuarioEspecifico = (request, response, next) => {    
    const id = request.params.id_usuario;       // id que aparece en la ruta
    const img = request.file;
    
    if(!img) {
        console.log('Error al subir la imagen');
        return response.status(402).redirect('/nombres/id');
    }

    Nombre.changeImage(id, img.filename)
        .then(() => {
            response.status(302);
            response.redirect('/nombres');
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
                csrfToken: request.csrfToken(), 
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