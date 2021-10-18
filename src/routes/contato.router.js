const { Router } = require("express")
const contatoController = require("../controllers/contato.controller")
const router = Router()
//const checkAuth = require('../middlewares/checkAuth')


router.get("/", contatoController.contato);
router.post("/", contatoController.saveContato);
module.exports = router;