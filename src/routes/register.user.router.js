const { Router } = require("express");
const register_user_controller = require('../controllers/register.user.controller');
const { check, validationResult, body } = require('express-validator');
const router = Router();

router.get("/cadastro", register_user_controller.getRegister);
router.post("/cadastro", [

    check("userName").notEmpty().withMessage("O campo nome não pode ser vazio"),
    check("email").isEmail().withMessage("O Email deve ser válido"),
    check("password").isLength({ min: 8 }).withMessage("A senha tem que conter no minimo 8 caracteres"),

],register_user_controller.createUser);


module.exports = router;