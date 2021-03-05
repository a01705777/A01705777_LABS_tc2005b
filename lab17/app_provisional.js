const db = require('../util/database');

// db.execute('Consulta SQL por ejemplo: SELECT * FROM mi_tabla');

//Dentro de Fetch All...
db.execute('SELECT * FROM videojuegos')
    .then(([rows, fieldData]) => {
        console.log(rows);
    })
    .catch(err => {
        console.log(err);
    });

//Execute regresa un arreglo de filas de la base de datos
         