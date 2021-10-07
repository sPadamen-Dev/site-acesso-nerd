const productsController = require('./products.controller')
const session = require('express-session');

  const homeController = {
    getAllProducts: async (req, res)=> {
        const bannerList = await productsController.getAllBanners();
        let returnType = 'objectList'
        const productList = await productsController.getAll();
        console.log(productList)
        if (!productList.product) {
            console.log ('entrou aqui')
            returnType = 'notFound'
        }
        res.render("home", { productList, bannerList, returnType } )
        /*const nameUser = session.userName;
        res.render("home", { productList, bannerList, returnType, name: nameUser } )*/
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

