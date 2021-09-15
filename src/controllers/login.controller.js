const db = require("../database/models")
const bcrypt = require('bcryptjs');
const session = require("express-session");

const loginController = {
  loginPage: (req, res) => {
    res.render("login");
  },
  postLogin: async (req, res) => {
    try{
      let { email, password } = req.body;
      await db.Users.findOne({where:{email}}).then(user => {
        if(user != null){
            let response = bcrypt.compareSync(password, user.password)
            if(response){
              session.userName = user
              res.status(200).json({msg: "Usuario logado com sucesso!"})
            }else{
              res.status(200).json({msg: "Senha ínvalida"})
            }
        }else{
          let msg = "Email não encontrado!"
          res.status(200).json({msg})
        }
      }).catch(err => {
        let msg = "Email não encontrado!"
        res.status(200).json({msg})
      });
}catch(err){
  res.status(500).json(err)
}}};

module.exports = loginController