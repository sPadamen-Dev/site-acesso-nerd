const { Router } = require('express')
const router = Router()
const forgotPasswordController = require('../controllers/forgotpassword.controller')

router.get("/", forgotPasswordController.getForm);
router.post("/", forgotPasswordController.sendEmail);

module.exports = router