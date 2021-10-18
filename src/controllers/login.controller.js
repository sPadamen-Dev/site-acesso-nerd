require('dotenv').config()
const db = require("../database/models")
const bcrypt = require('bcryptjs');
const session = require("express-session");

    const loginController = {
      loginPage: (req, res) => {
        res.render("login")
      },
      
      postLogin: async (req, res) => {
        let { email, senha } = req.body;
        const user = {email: email}
        const searchUser = await db.Users.findOne({where:{email:req.body.email}});
        try{
            if (searchUser != null){
            await bcrypt.compare(senha, searchUser.senha)       
              .then(response =>{
                if(response){
                  let nameUser = session.userEmail = searchUser.userEmail
                  return res.redirect(301, "/") 
                } 
                else{
                  return res.status(200).render("login",{msg: "Senha ou email inválido"})
                }
              }).catch(error =>{
                return res.status(500).json(error)
              });
            } else {
              let msg = "Usuario não encontrado!"
              res.status(200).render("login", { msg: msg })
            }
        }catch(error){
          res.status(500).json(error)
        } 
      }
    };




module.exports = loginController