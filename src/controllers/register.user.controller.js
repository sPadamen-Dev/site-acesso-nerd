const bcrypt = require('bcryptjs');
const { check, validationResult, body } = require('express-validator');
const db = require("../database/models");

module.exports = {
    getRegister: (req, res) => {
        res.render('register')
    },
    createUser: async (req, res) => {
        const { userName,birthDay, sex,  cpf, email, telephone, password, userStatus,
                addressType, street, number, additionalInfo, district, city, state, zipCode 
            } = req.body;
            console.log(email)
        const passwordCrypt = bcrypt.hashSync(password, 10);
        let listError = validationResult(req);
        const searchEmailValidate = await db.Users.findOne({where:{email}})
            try{
                if (listError.isEmpty() && searchEmailValidate != 'null') {
                     const user = await  db.Users.create({
                        user_name: userName, birth_day: birthDay, sex,
                         cpf, email, telefone: telephone, 
                         password: passwordCrypt, user_status: userStatus,
                    },);
                    const address =  await  db.Addresses.create({
                        address_type: addressType, street, number,
                         additional_info: additionalInfo,
                          district, city, state, zip_code: zipCode
                    });
                    await user.setAddress(address)
                    res.status(201).redirect("login")
                } else {    
                    let msg = "Email já cadastrado"
                    res.status(200).render("register", {msg})         
                }
            }catch(error){
                console.log(error)
                res.status(500).json(error)
            }
    }
};