'use strict';
var mysql = require("mysql");
const util = require('util');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: ""
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;
