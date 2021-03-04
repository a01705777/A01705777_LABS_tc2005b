const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'database_name',
    password: 'el_password_del_usuario_dela_base_de_datos'
});

module.exports = pool.promise();