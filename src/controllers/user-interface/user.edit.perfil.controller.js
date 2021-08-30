const db = require("../../database/models");
const session = require("express-session")
const bcrypt = require("bcryptjs")

module.exports = {
    saveUpdate: async (req, res)=>{
        try {
            let { user_name, email, birth_date, telefone, password } = req.body;
            let userId = session.userName.user_id;
            const hash = bcrypt.hashSync(password, 10)
        
            await db.Users.findOne({where:{email}})
                .then(user => {
                    if(user == undefined ){
                        db.Users.update({ user_name, email, birth_date, telefone},{where:{user_id: userId}})
                        res.redirect("/painel/usuario/edit-perfil")
                    }else{
                        let msg = "Email já cadastrado!"
                        res.redirect("/painel/usuario/edit-perfil", 301)
                    }
                })  
        } catch (error) {
            console.log(error)
        }
    }

}