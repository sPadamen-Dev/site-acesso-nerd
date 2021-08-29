const session = require("express-session")
function adminAuth(req, res, next){
    if(session.userName != undefined){
        next();
    }else{
        res.redirect("/login");
    }
}

module.exports = adminAuth;