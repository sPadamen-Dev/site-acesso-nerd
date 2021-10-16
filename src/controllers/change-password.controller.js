const userController = require('./user.controller')
require('dotenv').config()
const nerdTools = require('../../public/js/utils/nerdTools.js')

const responseStatus = {
    msg: undefined
}

const changePasswordController = {
    getForm: (req, res) => {
        res.render("change-password", { responseStatus });
    },
    update: async (req,res) => {

        const user = await userController.getUserByFilter(req, res)

        /* generate secret using current password from data base */
        const actualSecret = nerdTools.secretGenerate(user.password, 10)

        /* get secret to compare */
        const  passwordSecret = nerdTools.secretGenerate(req.body.secretkey, 10)

        if(actualSecret == passwordSecret) {
            console.log(`secret atual ${actualSecret} é identico ao secret informado ${passwordSecret} ` )
        }

        const userUpdated = userController.changePassword(req, res)
        if (userUpdated) {
            responseStatus.msg = 'Sua senha foi alterada com sucesso!'
            res.render("change-password", { responseStatus });
        }
    }
};

module.exports = changePasswordController