const { Router } = require("express")
const UserController = require("../controllers/user.controller")
const router = Router()

router.get("/", UserController.cadastro);
router.post("/", UserController.saveCadastro);

module.exports = router;