
var path = require("path");

//registrer mine routes
exports.frontpage_get=function(req,res){
    res.sendFile(path.join(__dirname+"/../view/register.html"))
};