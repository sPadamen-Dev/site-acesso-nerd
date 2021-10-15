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
    from: 'acessonerd.mail@gmail.com',
    to: '',
    subject: 'Acesso Nerd - Password Reminder',
    text: '',
    html: ''
}

const forgotPasswordController = {
    getForm: (req, res) => {
        res.render("forgotpassword");
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
                res.render("forgotpassword");
            } else {
                console.log('Email enviado com sucesso')
                res.render("forgotpassword");
            }
        })
    }
};

async function getForgotPasswordTemplate( user ) {
    const filePath = path.join(__dirname, '../views/templates/forgot-password.ejs');
    const template = await ejs.renderFile(filePath, { user } )    
    return template
}

module.exports = forgotPasswordController