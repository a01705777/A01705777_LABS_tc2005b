exports.getlogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicio de Sesión'
    });
};

exports.postlogin = (request, response, next) => {
    
};