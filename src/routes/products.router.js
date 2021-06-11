const { Router } = require('express')
const productsController = require("../controllers/products.controller")
const router = Router()

router.get("/", productsController.getAllProducts)
router.get("/:param/:value", productsController.getProductByFilter)
/*router.get("/:type", productsController.getProductByFilter)*/
/*router.get("/:type", productsController.getProductsByType)*/

module.exports = router;