const { User } = require('../database/models');
const nerdTools = require('../../public/js/utils/nerdTools')
const validationResult = require('express-validator').validationResult

const userController = {
    getUserByFilter: async (req, res) => {
        let user = ''
        if (req.body.email) {
            user = await getUserByEmail(req.body.email)
        }
        return user
    },
    changePassword: async (req, res) => {
        const user = await changePassword(req)
        return user
    },

    cadastro: (req, res) => {
        res.render("register");
    },
    saveCadastro: async (req, res) => {
        const { email, password, firstName, lastName, cpf, gender, birthDate, address, number, district, cep, city, state, contact_email, telephone } = req.body;
        const passwordCrypt = await nerdTools.encryptValue(password, 10)
        let listError = validationResult(req);
        const searchEmailValidate = await getUserByEmail(req.body.email)

        try {
            if (listError.isEmpty() && searchEmailValidate == undefined) {
                await User.create({
                    email,
                    password: passwordCrypt,
                    firstName,
                    lastName,
                    cpf,
                    gender,
                    birthDate,
                    address,
                    number,
                    district,
                    cep,
                    city,
                    state,
                    contact_email,
                    telephone
                });
                res.status(201).redirect("login")
            }
            else {
                let msg = "Email já cadastrado!"
                res.status(200).render("register", { msg })
            }

        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

async function getUserByEmail(email) {
    const user = await User.findOne({ where: { email } })
    return user;
}

async function changePassword(req) {

    const updateResponse = {}

    const { email, password, secretkey } = req.body
    try {
        let user = await getUserByEmail(email)
        if (!user) {
            updateResponse.error = 'Usuário não cadastrado.'
            updateResponse.msg = 'Cadastre-se e aproveite nossas ofertas!'
            return updateResponse
        }

        const actualPassword = await nerdTools.secretGenerate(user.password, 10)

        if (actualPassword !== secretkey) {
            updateResponse.error = 'Chave inválida ou expirada.'
            updateResponse.msg = 'Solicite nova chave através do link Esqueci Minha Senha'
            return updateResponse
        }

        const newPassword = await nerdTools.secretGenerate(password, 10)
        user.password = newPassword

        const userUpdated = await user.save()
        updateResponse.msg = 'Senha atualizada com sucesso! Faça o login e continue aproveitando nossas ofertas.'
        updateResponse.userUpdated = userUpdated

    } catch (error) {
        updateResponse.error = error
        updateResponse.msg = 'Não foi possivel redefinir a senha. Tente novamente em alguns minutos.'
        return updateResponse
    }

    return updateResponse
}

module.exports = userController