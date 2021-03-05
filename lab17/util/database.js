const mysql = require('mysql2');
/*
Modelo de pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'database_name',
    password: 'el_password_del_usuario_dela_base_de_datos'
});
*/
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'videojuegos',
    password: '',
    // port:
});

module.exports = pool.promise();