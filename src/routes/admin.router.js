const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const adminAdministratorsController = require("../controllers/admin-administrators.controller");
const router = Router();
const multer = require('multer');
const fs = require('fs');

/*
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
*/

const upload = multer({dest: '.public/img/profiles'})

router.get("/", adminController.adminLogin)
router.post("/", adminController.adminHome)

/* Products */
router.get("/products", adminProductsController.getAll)
router.get("/products/:id", adminProductsController.getById)
router.get("/product", adminProductsController.new)
router.post("/products", upload.array('pdp-inp-pics'), adminProductsController.create)
router.put("/products/:id", upload.array('pdp-inp-pics'), adminProductsController.update)
router.delete("/products/:id", adminProductsController.remove)

/* Administrators */

router.get("/administrators", adminAdministratorsController.getAll)
router.get("/administrators/:id", adminAdministratorsController.getById)
router.post("/administrators", upload.single('pdp-inp-pics'), adminAdministratorsController.create)
router.put("/administrators/:id", upload.single('pdp-inp-pics'), adminAdministratorsController.update)
router.delete("/administrators/:id", adminAdministratorsController.remove)

/*
router.get("/administrators", adminAdministratorsController.getAll)
router.get("/administrator/edit/:id", adminAdministratorsController.getById)
router.get("/administrator/create", adminAdministratorsController.create)
router.post("/administrator/save", upload.single('pdp-inp-pics'), adminAdministratorsController.save)
*/
module.exports = router;