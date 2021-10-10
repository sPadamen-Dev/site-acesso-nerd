const { Router } = require("express")
const cadastroController = require("../controllers/cadastro.controller")
const router = Router()

router.get("/", cadastroController.cadastro);
router.post("/", cadastroController.savecadastro);


module.exports = router;