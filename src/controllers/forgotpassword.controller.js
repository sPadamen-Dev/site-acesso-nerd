const nodemailer = require('nodemailer')
const userController = require('./user.controller')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'acessonerd.mail@gmail.com',
        pass: '1c3ss@N3rd'
    },
    tls: {
        rejectUnauthorized: false
    }
})

let mailOptions = {
    from: 'acessonerd.mail@gmail.com',
    to: '',
    subject: 'Acesso Nerd - Password Reminder',
    text: ''
}

const forgotPasswordController = {
    getForm: (req, res) => {
        res.render("forgotpassword");
    },
    sendEmail: async (req,res) => {
        const user = await userController.getUserByFilter(req, res)
        const emailText = `Sua senha é: ${user.password}`

        mailOptions.to = user.email
        mailOptions.text = emailText

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

module.exports = forgotPasswordController