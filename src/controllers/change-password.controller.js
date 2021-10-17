const userController = require('./user.controller')
require('dotenv').config()
const nerdTools = require('../../public/js/utils/nerdTools.js')

let updateResponse = {
    error: undefined,
    msg: undefined,
    userUpdated: undefined
}

const changePasswordController = {
    getForm: (req, res) => {
        console.log('Entrou no getForm')
        res.render("change-password", { updateResponse });
    },
    update: async (req,res) => {

        const user = await userController.getUserByFilter(req, res)

        if(user){            
            /* generate secret using current password from data base */
            const actualSecret = nerdTools.secretGenerate(user.password, 10)

            /* get secret to compare */
            const  passwordSecret = nerdTools.secretGenerate(req.body.secretkey, 10)

            if(actualSecret == passwordSecret) {
                console.log(`secret atual ${actualSecret} é identico ao secret informado ${passwordSecret} ` )
            }

            const status = await userController.changePassword(req, res)
            console.log(status)
            if (status.error) {
                updateResponse.error = status.error
                updateResponse.msg = status.msg
            } else if (status.userUpdated) {
                updateResponse.msg = status.msg
            }
            res.send(updateResponse)
        } else {
            updateResponse.error = 'Usuário não cadastrado.'
            updateResponse.msg = 'Cadastre-se e aproveite nossas ofertas!'
        }
        res.render("change-password", { updateResponse });

    }
};

module.exports = changePasswordController