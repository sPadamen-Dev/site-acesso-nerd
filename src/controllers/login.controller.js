const db = require("../database/models")
const bcrypt = require('bcryptjs');
const session = require("express-session");

const loginController = {
  loginPage: (req, res) => {
    res.render("login");
  },
  postLogin: async (req, res) => {
    let { email, password } = req.body;
    const searchUser = await db.Users.findOne({where:{email}});
    try{
        if (searchUser != null){
         await bcrypt.compare(password, searchUser.password)
          .then(response =>{
             if(response){
               let nameUser = session.userName = searchUser.user_name
               return res.redirect(301, "/",)
              //  return res.status(301).redirect("/home", {name: nameUser})
             }else{
               return res.status(200).render("login",{msg: "Senha ou email ínvalido"})
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