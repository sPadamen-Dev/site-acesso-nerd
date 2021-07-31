const { Router } = require("express")
const contatoController = require("../controllers/contato.controller")
const router = Router()

router.get("/", contatoController.contato);

module.exports = router;