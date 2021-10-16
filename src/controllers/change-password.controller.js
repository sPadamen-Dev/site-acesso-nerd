const userController = require('./user.controller')
require('dotenv').config()
const bcrypt = require('bcryptjs')
const nerdTools = require('../../public/js/utils/utils.js')

const changePasswordController = {
    getForm: (req, res) => {
        res.render("change-password");
    },
    update: async (req,res) => {
        const user = await userController.getUserByFilter(req, res)

        /* generate secret using current password from data base */
        const actualSecret = nerdTools.secretGenerate(user.password)

        /* get secret to compare */
        const  passwordSecret = nerdTools.secretGenerate(req.body.secretkey)

        if(actualSecret == passwordSecret) {
            console.log(`secret atual ${actualSecret} é identico ao secret informado ${passwordSecret} ` )
        }

        res.render("change-password", { msg: 'OK'});
        
    }
};

module.exports = changePasswordController