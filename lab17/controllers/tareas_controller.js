exports.getHTML = (request, response, next) => {
    response.render('html', {
        titulo: 'HTML',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.getCSS = (request, response, next) => {
    response.render('css', {
        titulo: 'CSS',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.getJS = (request, response, next) => {
    response.render('js', {
        titulo: 'JavaScript',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.get = (request, response, next) => {
    console.log('Estas en tareas');
    response.render('tareas', {
        titulo: 'Tareas',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.use = (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
};