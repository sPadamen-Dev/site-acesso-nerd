const session = require("express-session");
const bcrypt = require("bcryptjs")
const db = require("../../database/models");

module.exports =  {

    // pagina painel do usuario
    index: (req, res)=>{
        res.status(200).json({msg: "Painel administrativo do usuario"})
    },

    // Lista informações sobre o perfil do usuario e editar.
    accountInformation:(req, res) => {
        if(session.userName != undefined){
           let {email, user_name, gender, cpf, telefone} = session.userName;
           res.status(200).json({email: email, name:user_name, gender, cpf, telefone})
       }else{
           res.status(200).json({msg: "Você precisa está logado para acessa está pagina"})
       }

    },
    editAccount: async (req, res) => {
        try {
            let { email,name, password, telefone, birthDate} = req.body;
            const hash = bcrypt.hashSync(password, 10);
            let user = session.userName.user_id;
            console.log(user)
            if(user != undefined){
                await db.Users.findOne({where:{email}}).then(user => {
                    if(user == undefined){
                        return db.Users.update({email: email, user_name: name, password: hash,telefone, birth_date: birthDate},{where:{user_id: user}}).then(user => {
                            if(user){
                                res.status(301).json({msg: "Dados atualizado com sucesso!"})
                            }else{
                                res.status(200).json({msg: "Dados incorretos"})
                            }
                        }).catch(err => {
                            res.status(301).json({msg: "Verifique os dados informados"})
                        })
                    }else{
                        res.status(200).json({msg: "Email já cadastrado"})
                    }

                }).catch(err => {
                    res.status(404).json({err})
                })
            }else{
                res.status(200).json({msg: "Você precisa está logado"})
            }
           
        } catch (error) {
            console.log(error)
            res.status(404).json(error)
        }
    },

    // Lista endereços do usuario criar novos e editar
    accountAddresses: async (req, res) => {
        try {
            let user_id = session.userName.user_id;
            await db.Addresses.findAll({where:{user_id}}).then(anddresss =>{
                res.status(200).json(anddresss)
            })
        } catch (error) {
           res.status(404).json(error) 
        }
    },
    createAddress: async (req, res) => {
        let {addressType, street, number, additionalInfo, district, city, state,zipCode } = req.body
        let user_id = session.userName.user_id;
        try {
            await db.Addresses.create({user_id, address_type: addressType, street, number,
                additional_info: additionalInfo, district, city, state, zip_code: zipCode}).then(userAddress => {
                    if(userAddress){
                        res.status(201).json({msg: "Endereço criado com sucesso!"})
                    }else{
                        res.status(417).json({msg: "Falha na espectativa"})
                    }
                }).catch(err => {
                    res.status(417).json({msg: "Falha na espectativa"})
                })

        } catch (error) {
            res.status(404).json({error})
        }
    },

    // 

}
