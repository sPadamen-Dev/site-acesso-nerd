const { Router } = require("express")
const contatoController = require("../controllers/contato.controller")
const router = Router()

router.get("/", contatoController.contato);
router.post("/", contatoController.saveContato);
module.exports = router;