//henter moduler
var express = require('express'); //require express modul og kalder det en variabel
var session = require('express-session'); //session middleware
var bodyParser = require('body-parser'); // parsing middleware 
var path = require('path'); //filsystem
var cors = require('cors'); // cors i express bruges som middleware

var allRoutes = require('./routes/web'); //indkluderer og henter vores routes

var app = express(); 
app.use(session({
	secret: 'secret', //cookies 
	resave: true, //aktiv 
	saveUninitialized: true //session cookie bliver sat til browseren
}));

app.use(cors()); 
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', allRoutes);

app.listen(3000); //aktiverer porten

//exporterer app
module.exports = app;