const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const router = Router();

const multer = require('multer');
const upload = multer({dest: '/img/'})

router.get("/", adminController.adminHome);
router.get("/products", adminProductsController.getAllProducts);
router.get("/product/:id", adminProductsController.getProductById)
router.put("/product/:id/edit", upload.single('productPic'), adminProductsController.editProduct)
router.delete("/product/:id/delete", adminProductsController.deleteProduct)

module.exports = router;