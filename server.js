var mysql = require('mysql');
var bodyParser = require("body-parser");
var express = require("express");
var session = require("express-session");
var path = require("path");
var AllRoute = require('./routes/web');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Users',
    password: 'Eksamen',
    database: 'eksamen',
    insecureAuth: true
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.listen(3000);
console.log("Server started...");