var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    database: "gestiontareas",
    user: "root",
    password: "687831Ed.L"
});

module.exports = con;