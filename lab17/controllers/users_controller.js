exports.getlogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicio de Sesión',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postlogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;
    // console.log(request.body.usuario + ' ' + request.body.password);
    
    response.redirect('/');
};

exports.getlogout = (request, response, next) => {
    request.session.destroy((err) => {
        console.log(err);
        console.log('Logout');
        response.redirect('/');
    });
};