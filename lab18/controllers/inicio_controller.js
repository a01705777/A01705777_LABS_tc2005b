exports.get = (request, response, next) => {
    response.render('inicio', {
        titulo: 'Rafa Hinojosa',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};