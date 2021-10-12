const { Router } = require("express")
const registerController = require("../controllers/register.controller")
const router = Router()

router.get("/", registerController.cadastro);
router.post("/", registerController.saveCadastro);


module.exports = router;