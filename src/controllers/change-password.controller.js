const userController = require('./user.controller')
require('dotenv').config()
const nerdTools = require('../../public/js/utils/nerdTools.js')
const bcrypt = require('bcryptjs')
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
        const actualSecret = await nerdTools.secretGenerate(user.senha, 10)

        /* get secret to compare */
        const  passwordSecret = await req.body.secretkey

        if(bcrypt.compare(actualSecret, passwordSecret)) {
            console.log(`secret atual ${actualSecret} é identico ao secret informado ${passwordSecret} ` )
            const userUpdated = userController.changePassword(req, res)
            if (userUpdated) {
                responseStatus.msg = 'Sua senha foi alterada com sucesso!'
                res.render("change-password", { responseStatus });
            }
        } else {
            responseStatus.msg = 'Chave informada inválida ou expirada!'
            res.render("change-password", { responseStatus });
        }
    }
};

module.exports = changePasswordController