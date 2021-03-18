const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'labs_tc2005b',
    password: ''
    // port: por default: 3306
});

module.exports = pool.promise();