const productsController = require('./products.controller')
const ordersController = require('./orders.controller')
const session = require('express-session');

const msg = {
    msg: ''
}

  const homeController = {
    getAllProducts: async (req, res)=> {
        const bannerList = await productsController.getAllBanners();
        let returnType = 'objectList'
        const productList = await productsController.getAll();
        if (!productList) {
            returnType = 'notFound'
            msg.msg = 'Não há produtos correspondentes a sua pesquisa'
        }
        res.render("home", { productList, bannerList, returnType, msg } )
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
            msg.msg = 'Não há produtos correspondentes a sua pesquisa'
        }
        res.render("home", { productList, bannerList, returnType, msg } )
    },
    getAllOrdersByUser: async(req, res)=> {
        const bannerList = await productsController.getAllBanners()
        const orderList = await ordersController.getAllByUser(req, res);
        let returnType = 'orderList'
        if (!orderList) {
            returnType = 'notFound'
            msg.msg = 'Não há pedidos correspondentes a sua pesquisa'
        } 
        res.render("home", { orderList, bannerList, returnType, msg } )
    },
    toBuy: async(req, res)=> {
        const bannerList = await productsController.getAllBanners()
        await ordersController.create(req, res);

        const orderList = await ordersController.getAllByUser(req, res);
        let returnType = 'orderList'
        if (!orderList) {
            returnType = 'notFound'
            msg.msg = 'Não há pedidos correspondentes a sua pesquisa'
        } 
        res.render("home", { orderList, bannerList, returnType, msg } )
    }
}

module.exports = homeController;

