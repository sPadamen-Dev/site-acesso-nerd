const { Router } = require('express')
const router = Router()
const changePasswordController = require('../controllers/change-password.controller')
const { body, check, validationResult } = require('express-validator');

const validateEntries = [
    check('email', "O campo e-mail não pode ser vazio").notEmpty().bail(),
    check('email', "O e-mail precisa ser válido").isEmail().bail(),
    check('secretkey', 'O código de segurança não pode ser vazio').notEmpty().bail(),
    check('password',"Senha precisa ter ao menos 8 caracteres").isLength({ min: 8 }).bail(),
    check('confirmpassword',"Senha precisa ter ao menos 8 caracteres").isLength({ min: 8 }).bail(),
    body('confirmpassword').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Senhas precisam ser iguais');
        }
        return true;
      })
]

router.get("/", changePasswordController.getForm);
router.post("/", validateEntries, async (req, res, next) => {
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        errors = errors.mapped()
        return res.render('change-password', ({ errors, old: req.body}))
    } else {
        console.log("validacao OK")
        next()
    }
}, changePasswordController.update );

module.exports = router