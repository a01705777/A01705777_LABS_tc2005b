exports.getHTML = (request, response, next) => {
    response.render('html', {
        titulo: 'HTML'
    });
};

exports.getCSS = (request, response, next) => {
    response.render('css', {
        titulo: 'CSS'
    });
};

exports.getJS = (request, response, next) => {
    response.render('js', {
        titulo: 'JavaScript'
    });
};

exports.get = (request, response, next) => {
    console.log('Estas en tareas');
    response.render('tareas', {
        titulo: 'Tareas'
    });
};

exports.use = (request, response, next) => {
    response.status(404);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
};