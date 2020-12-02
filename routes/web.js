var express = require('express')
var router = express.Router();

var index_controller = require("../controller/indexController");
const { Router }  = require ("express");


router.get('/',index_controller.frontpage_get);

/** 

//Register Route
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/views/register.html'));
});

//Login Route
app.get('/login', function (request, response) {
    response.sendFile(path.join(__dirname + '/views/login.html'));
});

//Create user post
app.post('/register-user', function (request, response) {

    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var birthdate = request.body.birthdate;
    var gender = null;
    var interest = null;

    switch (request.body.gender) {
        case 'male':
            gender = 'male';
            break;
        case 'female':
            gender = 'female';
            break;
        default:
            gender = 'other';
    }

    switch (request.body.interest) {
        case 'male':
            interest = 'male';
            break;
        case 'female':
            interest = 'female';
            break;
        default:
            interest = 'other';
    }

    if (email && password) {
        var sql = "INSERT INTO eksamen.users (username, password, email, birthday, gender, interest, _ID) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const newId = uuidv4();
        const newToken = generateAccessToken(newId);

        connection.query(sql, [username, password, email, birthdate, gender, interest, newId], function (err, result) {
            if (err) throw err;
            console.log("success")
        });
        return response.json({
            token: newToken,
            user_id: newId
        });
    }

});

**/
//exporterer vores routes
module.exports = router;