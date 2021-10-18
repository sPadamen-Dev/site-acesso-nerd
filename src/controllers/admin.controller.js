const { Administrator } = require("../database/models")
const bcrypt = require('bcryptjs')
const adminController = {
    adminLogin: (req, res) => {
        res.render("admin-login")
    },
    adminHome: async (req, res) => {
        const { user, password } = req.body
        const adminFound = await Administrator.findOne({where:{user}});
        try {
            if (adminFound) {
                await bcrypt.compare(password, adminFound.password)
                .then(response =>{
                    if(response){
                        const panel = 'default'
                        res.render("admin-home", {panel})
                    }else{
                      return res.status(200).render("admin-login",{msg: "Senha ou email ínvalido"})
                    }
                 }).catch(error =>{
                   return res.status(500).json(error)
                 });
            } else { 
                res.status(200).render("admin-login", { msg: "Usuario não encontrado!" })
            }
        }catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = adminController;
