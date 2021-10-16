const userController = require('./user.controller')
require('dotenv').config()

const changePasswordController = {
    getForm: (req, res) => {
        res.render("change-password");
    },
    update: async (req,res) => {
        const user = await userController.getUserByFilter(req, res)
    }
};

module.exports = changePasswordController