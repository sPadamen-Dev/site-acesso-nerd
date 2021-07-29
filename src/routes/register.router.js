const { Router } = require("express");
const registerController = require('../controllers/register.controller');
const { check, validationResult, body } = require('express-validator');
const router = Router();

router.get("/cadastro", registerController.getRegister);
router.post("/cadastro", [

    check("fullName").notEmpty().withMessage("O campo nome não pode ser vazio"),
    check("birthday").isDate().withMessage("A data deve ser MM/DD/YYYY"),
    check("email").isEmail().withMessage("O Email deve ser válido"),
    check("password").isLength({ min: 8 }).withMessage("A senha tem que conter no minimo 8 caracteres"),


    // body("email").custom((email) => {
    //     let user = JSON.parse(fs.readFileSync('./data/users.json'))
    //     return users.email != email
    // }).withMessage("Usuario já existe")

], registerController.postRegister);


module.exports = router;