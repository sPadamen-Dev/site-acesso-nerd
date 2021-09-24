const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const adminAdministratorsController = require("../controllers/admin-administrators.controller");
const router = Router();
const multer = require('multer');
const fs = require('fs');

const upload = multer({ dest: '/img' })

router.get("/", adminController.adminLogin)
router.post("/", adminController.adminHome)

/* Products */
router.get("/products", adminProductsController.getAll)
router.get("/products/:id", adminProductsController.getById)
router.get("/product", adminProductsController.new)
router.post("/products", upload.array('prod-inp-pics'), adminProductsController.create)
router.put("/products/:id", upload.array('prod-inp-pics'), adminProductsController.update)
router.delete("/products/:id", adminProductsController.remove)

/* Administrators */

router.get("/administrators", adminAdministratorsController.getAll)
router.get("/administrators/:id", adminAdministratorsController.getById)
router.post("/administrators", upload.single('admin-inp-pic'), adminAdministratorsController.create)
router.put("/administrators/:id", upload.single('admin-inp-pic'), adminAdministratorsController.update)
router.delete("/administrators/:id", adminAdministratorsController.remove)

/*
router.get("/administrators", adminAdministratorsController.getAll)
router.get("/administrator/edit/:id", adminAdministratorsController.getById)
router.get("/administrator/create", adminAdministratorsController.create)
router.post("/administrator/save", upload.single('pdp-inp-pics'), adminAdministratorsController.save)
*/
module.exports = router;