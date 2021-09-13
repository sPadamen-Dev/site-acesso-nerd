const productsController = require('./products.controller')
const session = require('express-session');

  const homeController = {
    getAllProducts: (req, res)=> {
        let returnType = 'objectList'
        const productList = productsController.getAllProducts();
        const bannerList = productsController.getAllBanners();
        const nameUser = session.userName;
        res.render("home", { productList, bannerList, returnType, name: nameUser } )
    },
    getProductById: (req, res)=> {
        let returnType = 'singleObject'
        let product = productsController.getProductById(req.params.id)
        res.render("home", {product, returnType})
    },
    getProductByFilter: (req, res)=> {
        const bannerList = productsController.getBannerList();
            if (req.params.param == 'type') {
                let returnType = 'objectList'
                let productList = productsController.getProductsByType(req.params.value)
                res.render("home", {productList, bannerList, returnType})
            }
    }
}

module.exports = homeController;

