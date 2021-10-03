const cadastroController = {
    cadastro: (req, res) => {
      res.render("register");
    },
    savecadastro: (req,res) => {
      console.log(req.body)
    }
  };

  module.exports = cadastroController;