const db = require("../database/models");

const contatoController = {
    contato: (req, res) => {
      res.render("contato");
    },
    saveContato: async (req,res) => {
      let { name, tel, email, mensagem, contatoLgpd } = req.body;
      await db.Users_Contacts.create({
        fullName: name,
        telephone: tel,
        email,
        message: mensagem
      })
      res.status(200).redirect("/")
      
    }
  };

  module.exports = contatoController;