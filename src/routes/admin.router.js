const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const router = Router();

router.get("/", adminController.adminHome);
router.get("/products", adminProductsController.getAllProducts);

module.exports = router;