const { Router } = require("express")
const aboutController = require("../controllers/about.controller")
const router = Router()

router.get("/", aboutController.quemSomos);

module.exports = router;