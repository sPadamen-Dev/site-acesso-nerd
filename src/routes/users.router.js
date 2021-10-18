const { Router } = require("express")
const UsersController = require("../controllers/users.controller")
const router = Router()

router.get("/", UsersController.cadastro);
router.post("/", UsersController.saveCadastro);


module.exports = router;