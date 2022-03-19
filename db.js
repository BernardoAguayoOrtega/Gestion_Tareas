var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    database: "gestiontareas",
    user: "root",
    password: "root"
});

module.exports = con;
