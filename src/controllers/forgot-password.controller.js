const nodemailer = require('nodemailer')
const userController = require('./user.controller')
require('dotenv').config()
const ejs = require('ejs')
const path = require('path');

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})

let mailOptions = {
    from: 'Acesso Nerd, acessonerd.mail@gmail.com',
    to: '',
    subject: 'Acesso Nerd - Esqueci minha Senha',
    text: '',
    html: ''
}

const forgotPasswordController = {
    getForm: (req, res) => {
        res.render("forgot-password");
    },
    sendEmail: async (req,res) => {
        const user = await userController.getUserByFilter(req, res)
        const template = await getForgotPasswordTemplate( user )
        
        if (template) {
            mailOptions.html = template        
        } else {
            const emailText = `Sua senha é: ${user.password}`
            mailOptions.text = emailText
        }

        mailOptions.to = user.email
        transporter.sendMail(mailOptions, function(err, success) {
            if(err) {
                console.log('Erro no envio de email: ', err)
                res.render("forgot-password");
            } else {
                console.log('Email enviado com sucesso')
                res.render("forgot-password");
            }
        })
    }
};

async function getForgotPasswordTemplate( user ) {
    const filePath = path.join(__dirname, '../views/templates/template-forgot-password.ejs');
    const template = await ejs.renderFile(filePath, { user } )    
    return template
}

module.exports = forgotPasswordController