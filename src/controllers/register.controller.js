const db = require("../database/models");

const registerController = {
    cadastro: (req, res) => {
      res.render("register");
    },
    saveCadastro: async (req,res) => {
      let { firstName, lastName, gender, birthDate, address, number, district, cep, city, state, mail, phone  } = req.body;
      await db.Users_Registers.create({
        firstName: firstName,
        lastName: lastName,
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
      })
      res.status(200).redirect("/")
      
    }
  };

  module.exports = registerController;