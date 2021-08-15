const fs = require('fs');
const bcrypt = require('bcryptjs')
const { check, validationResult, body } = require('express-validator');
const { Addresses, Users } = require('../database/models')

module.exports = {
    getRegister: async (req, res) => {

        res.render('register')
    },
    postRegister: (req, res) => {
        let { cpf, fullName, sexo, birthday, tel, email, password } = req.body
        let passwordCrypt = bcrypt.hashSync(password, 10)
        let listError = validationResult(req)


        if (listError.isEmpty()) {
            let user = { fullName, cpf, email, birthday, sexo, tel, password: passwordCrypt }
            let userJson = JSON.stringify(user)
            fs.writeFileSync("./src/db/users.json", userJson)
            res.redirect("/login")

        } else {
            console.log(listError)
            return res.render("register", { errors: listError.errors })
        }


    }
}