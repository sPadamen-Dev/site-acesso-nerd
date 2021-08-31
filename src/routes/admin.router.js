const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const router = Router();

router.get("/", adminController.adminHome);
router.get("/products", adminProductsController.getAllProducts);
router.get("/product/:id/edit", adminProductsController.getProductDetails)
router.put("/product/:id/edit", upload.single('productPic'), adminProductsController.editProduct)
router.delete("/product/:id/delete", adminProductsController.deleteProduct)

module.exports = router;