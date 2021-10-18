const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const adminAdministratorsController = require("../controllers/admin-administrators.controller");
const router = Router();
const methodOverride = require('method-override')

const multer = require('multer');
const uploadProfile = multer({dest: './public/img/profiles'})
const uploadProduct = multer({dest: './public/img/products'})

router.use(methodOverride('_method'));

router.get("/", adminController.adminLogin)
router.post("/", adminController.adminHome)

/* Administrators */
router.get("/administrators", adminAdministratorsController.getAll)
router.get("/administrators/:id", adminAdministratorsController.getById)
router.get('/administrator', adminAdministratorsController.create)
router.post('/administrator', uploadProfile.single('admin-inp-pic'), adminAdministratorsController.save)
router.put("/administrators/:id", uploadProfile.single('admin-inp-pic'), adminAdministratorsController.update)
router.get("/administrators/delete/:id", adminAdministratorsController.remove)

/* Products */
router.get("/products", adminProductsController.getAll)
router.get("/products/:id", adminProductsController.getById)
router.get("/product", adminProductsController.create)
router.post("/product", uploadProduct.single('prod-inp-pic'), adminProductsController.save)
router.put("/products/:id", uploadProduct.single('prod-inp-pic'), adminProductsController.update)
router.get("/products/delete/:id", adminProductsController.remove)

module.exports = router;