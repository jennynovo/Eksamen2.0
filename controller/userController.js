//var User = require('../models/user');
var path = require('path');

var config = require('../databaseconfig.js');
var con = config.connection;

// vis alle brugere
exports.user_list_possible_matches = function(req, res) {
    res.send('NOT IMPLEMENTED: user possible matches list');
};
//KRAVSPECIFIKATION 2
// login function, if true=log else=end
exports.user_detail = function(req, res) {
	
	if(req.session.loggedin == true && req.session.email) {
		con.query('SELECT * FROM users WHERE email = ?', [req.session.email], function(error, results, fields) {
			if (results.length > 0) {

				var user = results[0];

				req.session.interest = user.interest; //display på profile
				req.session.gender = user.gender; //display på profile

				res.render(path.join(__dirname + '/../view/profile.ejs'), {
			        user: user
			    }); //succesfull

			} else {
				res.send('Incorrect Username and/or Password!'); //not succesfull
			}			
			res.end();
		});
	}
};

// vis bruger GET.
exports.user_create_get = function(req, res) {
    res.sendFile(path.join(__dirname + '/../view/register.html'));
};
//KRAVSPECIFIKATION 1
// håndterer registrering af bruger POST. 
//routes/register
exports.user_create_post = function(req, res) {
//attributterne 
    var email = req.body.email;
	var password = req.body.password;
	var name = req.body.name;
	var interest = req.body.interest;
	var gender = req.body.gender;

	//login kontrolleres ved if else statement
	//oprettes i SQL, tjekker for key(unik) email
	//email er unikt så hvis emailen allerede findes i databasen vil den throw err, hvis ikke vil den succesful logge dig ind
	if (email && password) {
		var sql = "INSERT INTO users (name, gender, interest, email, password) VALUES (?, ?, ?, ?, ?)";
		con.query(sql, [name, gender, interest, email, password], function (err, result) {
			if (err) {
				throw err; //hvis email eksister vil den throw error
			} else {
				req.session.loggedin = true; //loggin lykkes
				req.session.email = email; //email ok
				res.redirect('/user'); //du kommer efterfølgende ind på profile.ejs
			} 
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
};

// slet bruger GET.
//KRAVSPECIFIKATION 3
exports.user_delete_get = function(req, res) {

	if(request.session.loggedin == true) {
	}
	else {
	}
	
    res.send('NOT IMPLEMENTED: user delete GET');
};
//kravsp3 + 4
//IKKE IMPLEMENTERET 
// Håndterer slet bruger POST.
exports.user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete POST');
};

// update bruger GET.
exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user update GET');
};

// håndterer update POST.
exports.user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: user update POST');
};
