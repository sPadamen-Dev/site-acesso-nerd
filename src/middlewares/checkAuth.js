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

/*
module.exports = async(req, res, next) => {
    const token = req.header('x-auth-token')
    if(!token){
        return res.render('login')
    }

    try{
        let user = jwt.verify(token, process.env.ACESS_TOKEN_SECRET)
        req.user = user.email;
        next();
    } catch (error){
        return res.send('token invalid')
    }
}*/              

/*                   const token = jwt.sign({
                    email
                  }, process.env.ACESS_TOKEN_SECRET, {
                    expiresIn:3600000

                    res.json({
                        success: true,
                        message: 'Token criado!!!',
                        toke: token
                        });*/

    module.exports = async(req, res, next) => {
    var token = req.body.authToken || req.query.authToken || req.headers['x-access-token'];
    if(token) {
     jwt.verify(token, process.env.ACESS_TOKEN_SECRET, function(err, decoded) { 
     if (err) {
     return res.json({ success: false, message: 'Falha ao tentar autenticar o token!' }); 
     } else {
     //se tudo correr bem, salver a requisição para o uso em outras rotas
     //req.decoded = decoded; //
     res.render('quem-somos')
     next();
     }
     });
    } else {
     // se não tiver o token, retornar o erro 403
     return res.status(403).render('login'); 
     }
    }