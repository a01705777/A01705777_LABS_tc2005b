const Usuario = require('../models/usuario_model');
const bcrypt = require('bcryptjs');
const session = require('express-session');

exports.getlogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicio de Sesión',
        csrfToken: request.csrfToken(),
        error: request.session.error,
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postlogin = (request, response, next) => {
    request.session.error = "";
    const correo = request.body.correo;

    Usuario.fetchMail(correo)
        .then(([rows, fieldData]) => {
            // Checamos que haya exista el registroo del correo
            if(rows.length < 1) {
                request.session.error = "Error en usuario y/o contraseña"; 
                response.redirect('/usuarios/login');
            }
            else {
                bcrypt.compare(request.body.password, rows[0].password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.correo = rows[0].email;
                            request.session.usuario = rows[0].nombre;
                            return request.session.save(err => {
                                response.redirect('/');
                            });
                        }
                        else {
                            request.session.error = "Error en usuario y/o contraseña"; 
                            response.redirect('/usuarios/login');
                        }
                    })
                    .catch(err => {
                        request.session.error = "Error en usuario y/o contraseña"; 
                        response.redirect('/usuarios/login');
                    });
            }
            
        })
        .catch( err => console.log(err));
    
};

exports.getSignUp = (request, response, next) => {
    response.render('signup', {
        titulo: 'Registra tus datos',
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

// Post Nuevo Nombre (Recibo lo enviado)
exports.postSignUp = (request, response, next) => {
    const img = request.file;

    if(!img) {
        console.log('Error al subir la imagen');
        return response.status(402).redirect('/usuarios/signup');
    }

    const new_user = new Usuario(request.body.nuevo_correo, 
                                request.body.nueva_contraseña, 
                                request.body.nuevo_nombre,
                                request.body.nueva_edad,
                                img.filename);
    new_user.save()
        .then(() => {
            request.session.isLoggedIn = true;
            request.session.usuario = request.body.nombre;

            // Hacemos una cookie
            response.setHeader('Set-Cookie', ['ultimo_usuario =' + new_user.nombre + '; HttpOnly']);
            response.status(302);
            response.redirect('/');
        })
        .catch(err => {
            console.log(err)
        });
};

exports.getlogout = (request, response, next) => {
    request.session.destroy((err) => {
        console.log('Logout');
        response.redirect('/');
    });
};