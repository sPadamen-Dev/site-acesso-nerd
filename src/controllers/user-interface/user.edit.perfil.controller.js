const db = require("../../database/models");

module.exports = {
    saveUpdate: async (req, res)=>{
        let { name, email, birth_date, telefone } = req.body;
        let userId = session.userName.user_id;
        console.log(userId)
        // await db.Users.update({
        //     name, email, birth_date, telefone
        // })

        console.log(req.body.email)
        res.send("recebi seus dados")
    }

}