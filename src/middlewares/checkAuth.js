require('dotenv').config()
const jwt = require('jsonwebtoken')

/*(req, res, next) => {
    let userValid = false;
    if(userValid){
        next()
    } else {
        return res.render('login')
    }

}*/

module.exports = async(req, res, next) => {
    const token = req.header('x-auth-token')
    if(!token){
        return res.render('login')
    }

    try{
        let user = await jwt.verify(token, process.env.ACESS_TOKEN_SECRET)
        req.user = user.email;
        next();
    } catch (error){
        return res.send('token invalid')
    }
}

