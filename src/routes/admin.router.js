const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const adminAdministratorsController = require("../controllers/admin-administrators.controller");
const router = Router();
const multer = require('multer');
const fs = require('fs');
const administratorsController = require("../controllers/admin-administrators.controller");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        const dir = "/img/products/uploads"
        if(!fs.existsSync(dir)){
            console.log('diretorio nao existe')
            fs.mkdirSync(dir)
        }
        callback(null, dir)
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

const upload = multer({ storage: storage })

router.get("/", adminController.adminHome)

/* Products */
router.get("/products", adminProductsController.getAllProducts)
router.get("/product/edit/:id", adminProductsController.getProductById)
router.get("/product/create", adminProductsController.createProduct)
router.post("/product/save", upload.array('pdp-inp-pics'), adminProductsController.saveProduct)
router.delete("/product/:id/delete", adminProductsController.deleteProduct)

/* Administrators */
router.get("/administrators", adminAdministratorsController.getAllAdministrators)

module.exports = router;