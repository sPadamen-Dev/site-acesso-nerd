const session = require("express-session");
const db = require("../../database/models");

module.exports =  {

    index: async (req, res)=>{
        let option = req.params.config
        if(option === "editar-perfil" || option === "enderecos"|| option === "cartoes-salvo"|| option === "historico-de-compras"){
             let { email, telefone, birth_date,cpf, user_name} = session.userName;
            res.status(200).render("userInterface", { option, inforUser:{
                email, telefone, birth_date, user_name, cpf
            }})
        }else{
            option = undefined
            res.status(404).render("userInterface")
        }
    },
    editUser: async(req, res)=>{
        try {
          let { user_name, email, birth_date, telefone, password } = req.body;
            let userId = session.userName.user_id;
            // const hash = bcrypt.hashSync(password, 10)
            await db.Users.findOne({where:{email}})
                .then(user => {
                    if(user == undefined ){
                        db.Users.update({ user_name, email, birth_date, telefone},{where:{user_id: userId}})
                        res.status(200).redirect("/painel/usuario/edit-perfil")
                    }else{
                        let msg = "Email já cadastrado!"
                        res.redirect("/painel/usuario/edit-perfil", 301)
                    }
                })  
            
        } catch (error) {
            res.status(400).redirect('/')
        }
    },
    addressesUsers: async(req, res) => {
        try {
            let userId = session.userName;
            // console.log(userId)
            await db.Users.findOne({where:{email: userId.email}})
            then(user => {
                if(user != undefined){
                    res.status(200).render("bodyAddressesPerfil", user)
                }else{
                    res.status(401).redirect("/")
                }
            })

        } catch (error) {
            res.status(400).redirect('/')
        }
    }



}
