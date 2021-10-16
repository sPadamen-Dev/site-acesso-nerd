const { Router } = require('express')
const router = Router()
const changePasswordController = require('../controllers/change-password.controller')

router.get("/", changePasswordController.getForm);
router.post("/", changePasswordController.update);

module.exports = router