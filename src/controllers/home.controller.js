const productsController = require('./products.controller')
const ordersController = require('./orders.controller')
const session = require('express-session');

  const homeController = {
    getAllProducts: async (req, res)=> {
        const bannerList = await productsController.getAllBanners();
        let returnType = 'objectList'
        const productList = await productsController.getAll();

        if (!productList.product) {
            returnType = 'notFound'
        }
        res.render("home", { productList, bannerList, returnType } )
    },
    getProductById: async (req, res)=> {
        let returnType = 'singleObject'
        let product = await productsController.getById(req.params.id)
        res.render("home", {product, returnType})
    },
    getProductByFilter: async(req, res)=> {
        const bannerList = await productsController.getAllBanners();
        let returnType = 'objectList'
        const productList = await productsController.getByFilter(req, res);

        if (!productList) {
            returnType = 'notFound'
        }
        res.render("home", { productList, bannerList, returnType } )
    },
    getAllOrders: async(req, res)=> {
        const orderList = await ordersController.getAll(req, res)
        let returnType = 'orderList'

        if (!orderList) {
            returnType = 'notFound'
        }
        res.render("home", { orderList, returnType } )
    }
}

module.exports = homeController;

