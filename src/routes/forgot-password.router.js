const { Router } = require('express')
const router = Router()
const forgotPasswordController = require('../controllers/forgot-password.controller')

router.get("/", forgotPasswordController.getForm);
router.post("/", forgotPasswordController.sendEmail);

module.exports = router