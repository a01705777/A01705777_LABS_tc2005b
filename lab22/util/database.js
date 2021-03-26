const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'lab18',
    database: 'labs_tc2005b',
    password: 'kCUHe1PNddz8cYLO'
    // port: por default: 3306
});

module.exports = pool.promise();