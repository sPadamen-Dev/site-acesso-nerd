const userController = require('./user.controller')
const session = require("express-session");
const nodeTools = require('../../public/js/utils/nerdTools')

const loginController = {
  loginPage: (req, res) => {
    res.render("login");
  },
  postLogin: async (req, res) => {

    const validationResponse = await userLoginValidate( req, res )

    if (validationResponse.error) {
      res.status(500).render("login", { msg: validationResponse.msg })
      /*res.status(500).json(validationResponse.error)*/
    }
    if (!validationResponse.user) {
      res.status(200).render("login", { msg: validationResponse.msg })
    } 

    const { user_id, user_name } = validationResponse.user

    req.session.user = { user_id: user_id, user_name: user_name };

    res.status(301).redirect('/');
  }
};

async function userLoginValidate( req, res ) {

  let validationResponse = {
    user: '',
    msg: '',
    error: ''
  }

  try {
    const user = await userController.getUserByFilter(req, res)
    validationResponse.user = user

    const { password } = user

    if (user) {
      const entryPassword = req.body.password
      const encryptedPassEntry = nodeTools.encryptValue(entryPassword)

      if ( password == encryptedPassEntry ){
        validationResponse.user = user
      } else {
        validationResponse.msg = 'Usuário ou senha Inválidos'
      }
    }      
  } catch (error) {
    validationResponse.msg = 'Erro na validação do usuário. Tente novamente mais tarde'
    validationResponse.error = error
  }

  return validationResponse
}

module.exports = loginController