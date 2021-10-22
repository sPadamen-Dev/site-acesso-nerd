const { Users } = require('../database/models');
const nerdTools = require('../../public/js/utils/nerdTools')

const userController = {
    getUserByEmail: async (email) => {
        const user = await getUserByEmail(email)
        return user;
    },
    getUserByFilter: async (req, res) => {
        const user = await getUserByFilter(req.body.email)
        return user;
    },
    changePassword: async (req, res) => {
        const user = await changePassword (req)
        return user
    }
}

async function getUserByEmail (email) {
    const user = await Users.findOne({where:{email}})
    return user;
}

async function getUserByFilter (email) {
    const user = await Users.findOne({where:{email}})
    return user;
}

async function changePassword(req) {

    const { email, password } = req.body

    let user = await getUserByFilter(email)
    const newPassword = await nerdTools.secretGenerate(password, 10)
    user.senha = newPassword

    const userUpdated = await user.save()
    return userUpdated
}

module.exports = userController