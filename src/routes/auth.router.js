const { Router } = require('express')
const router = Router()
const homeController = require("../controllers/home.controller")


router.get("/", (req, res, next) => {
    let userValid = false;
    if(userValid){
        next()
    } else {
        return res.render('login')
    }

}  ,homeController.getAllProducts)
router.get("/product/:id", homeController.getProductById)
router.get("/products/:prmfield/:prmvalue", homeController.getProductByFilter)

module.exports = router;