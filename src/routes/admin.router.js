const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const router = Router();

const multer = require('multer');
const upload = multer({dest: '/img/'})

router.get("/", adminController.adminHome);
router.get("/products", adminProductsController.getAllProducts);
router.get("/product/edit/:id", adminProductsController.getProductById)
router.get("/product/create", adminProductsController.createProduct)
router.post("/product/save", upload.array('pdp-inp-pics'), adminProductsController.saveProduct)
/*router.put("/product/edit", upload.array('pdp-inp-pics', 4), adminProductsController.editProduct)*/
router.delete("/product/:id/delete", adminProductsController.deleteProduct)


module.exports = router;