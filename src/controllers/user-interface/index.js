const session = require("express-session");
const db = require("../../database/models");

module.exports =  {

    index: async (req, res)=>{
        let option = req.params.config
        if(option === "editar-perfil" || option === "enderecos"|| option === "cartoes-salvo"|| option === "historico-de-compras"){
             let { email, telefone, birth_date, user_name} = session.userName;
            res.status(200).render("userInterface", { option, inforUser:{
                email, telefone, birth_date, user_name
            }})
        }else{
            option = undefined
            res.status(200).render("userInterface")
        }
    }
}
