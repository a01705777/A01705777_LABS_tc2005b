exports.getlogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicio de Sesión'
        //isLoggedIn: if(request.session.isLoggedIn === true) ? true : false
    });
};

exports.postlogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;

    response.redirect('/');
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/');
    });
};