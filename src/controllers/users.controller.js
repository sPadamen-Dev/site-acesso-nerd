const db = require("../database/models");
const validationResult = require('express-validator').validationResult
const { check } = require('express-validator');
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken')

const UsersController = {
    cadastro: (req, res) => {
      res.render("register");
    },
    saveCadastro: async (req,res) => {
      let { userEmail} = req.body;
      const user = {email: userEmail}
      const { user_mail, senha, firstName, lastName, cpf, gender, birthDate, address, number, district, cep, city, state, mail, phone  } = req.body;
      const passwordCrypt = bcrypt.hashSync(senha, 10);
      let listError = validationResult(req);
      const searchEmailValidate = await db.Users.findOne({where:{email:req.body.user_mail}})
            try{
                if (listError.isEmpty() && searchEmailValidate == undefined ) {
        let user = 
        await db.Users.create({
        userEmail: user_mail,
        senha: passwordCrypt,
        firstName: firstName,
        lastName: lastName,
        cpf: cpf,
        gender: gender,
        birthDate: birthDate,
        address: address,
        number: number,
        district: district,
        cep: cep,
        city: city,
        state: state,
        email: mail, 
        telephone: phone
      });
      res.status(201).redirect("login")}
      else {    
        let msg = "Email já cadastrado!"
        res.status(200).render("register", {msg})         
    }

    }catch(error){
                console.log(error)
                res.status(500).json(error)
            }
    }
};

  module.exports = UsersController;