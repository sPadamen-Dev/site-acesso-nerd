const { Users } = require('../database/models');
const nerdTools = require('../../public/js/utils/nerdTools')

const userController = {
    getUserByFilter: async (req, res) => {
        const user = await getUserByFilter(req.body.email)
        return user;
    },
    changePassword: async (req, res) => {
        const user = await changePassword (req)
        return user
    }
}

async function getUserByFilter (email) {
    const user = await Users.findOne({where:{email}})
    return user;
}

async function changePassword(req) {

    const updateResponse = { }

    const { email, password, secretkey } = req.body
    try {
        let user = await getUserByFilter(email)
        if(!user) {
            updateResponse.error = 'Usuário não cadastrado.'
            updateResponse.msg = 'Cadastre-se e aproveite nossas ofertas!'
            return updateResponse
        }

        const actualPassword = await nerdTools.secretGenerate(user.password, 10)

        if(actualPassword !== secretkey) {
            updateResponse.error = 'Chave inválida ou expirada.'
            updateResponse.msg = 'Solicite nova chave através do link Esqueci Minha Senha'
            return updateResponse
        }

        const newPassword = await nerdTools.secretGenerate(password, 10)
        user.password = newPassword

        const userUpdated = await user.save()
        updateResponse.msg = 'Senha atualizada com sucesso! Faça o login e continue aproveitando nossas ofertas.'
        updateResponse.userUpdated= userUpdated

    } catch (error) {
        updateResponse.error= error
        updateResponse.msg = 'Não foi possivel redefinir a senha. Tente novamente em alguns minutos.'
        return updateResponse
    }
    
    return updateResponse
}

module.exports = userController