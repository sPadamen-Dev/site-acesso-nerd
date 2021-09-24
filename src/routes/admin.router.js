const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const adminProductsController = require("../controllers/admin-products.controller");
const adminAdministratorsController = require("../controllers/admin-administrators.controller");
const router = Router();
const methodOverride = require('method-override')

const multer = require('multer');
const upload = multer({dest: './public/img/profiles'})

router.use(methodOverride('_method'));

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

router.get('/administrator', adminAdministratorsController.create)
router.post('/administrator', upload.single('admin-inp-pic'), adminAdministratorsController.save)

router.put("/administrators/:id", upload.single('admin-inp-pic'), adminAdministratorsController.update)

router.delete("/administrators/:id", adminAdministratorsController.remove)

module.exports = router;