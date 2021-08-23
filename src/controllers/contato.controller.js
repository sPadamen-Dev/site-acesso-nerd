const contatoController = {
    contato: (req, res) => {
      res.render("contato");
    },
    saveContato: (req,res) => {
      console.log(req.body)
    }
  };

  module.exports = contatoController;