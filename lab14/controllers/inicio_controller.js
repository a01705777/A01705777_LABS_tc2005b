exports.get = (request, response, next) => {
    response.render('inicio', {
        titulo: 'Rafa Hinojosa'
    });
};