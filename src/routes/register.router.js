const { Router } = require("express");
const registerController = require('../controllers/register.controller');

const router = Router();

router.get("/cadastro", registerController.getRouter);

module.exports = router;