const { Router } = require('express')
const router = Router()
const homeController = require("../controllers/home.controller")

router.get("/", homeController.getAllProducts)
router.get("/product/:id", homeController.getProductById)
router.get("/products/:prmfield/:prmvalue", homeController.getProductByFilter)

module.exports = router;