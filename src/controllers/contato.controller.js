const { Contact } = require("../database/models");

const contatoController = {
    contato: (req, res) => {
      res.render("contato");
    },
    saveContato: async (req,res) => {
      let { name, telephone, contact_email, mensagem, contatoLgpd } = req.body;
      await Contact.create({
        fullName: name,
        telephone,
        contact_email,
        message: mensagem
      })
      res.status(200).redirect("/")
      
    }
  };

  module.exports = contatoController;