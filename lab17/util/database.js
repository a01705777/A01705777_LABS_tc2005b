const mysql = require('mysql2');

const pool = mysql.createPool({
    // Hay que pasar un objeto a esta funcion
    host: 'localhost',
    user: 'root',
    database: 'desarrollo_software',
    password: ''
});

module.exports = pool.promise();