const { Router } = require('express')
const productsController = require("../controllers/products.controller")
const router = Router()
const session = require("express-session")

router.get("/", productsController.getAllProducts)
router.get("/:param/:value", productsController.getProductByFilter)

module.exports = router;