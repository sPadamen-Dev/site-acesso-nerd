const { Users } = require('../database/models');

const userController = {
    getUserByFilter: async (req, res) => {
        const user = await getUserByFilter(req.body.email)
        console.log(user)
        return user;
    }
}

async function getUserByFilter (email) {
    const user = await Users.findOne({where:{email}})
    return user;
}

module.exports = userController