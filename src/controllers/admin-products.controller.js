const productsController = require('./products.controller')

const adminProductsController = {
    getAllProducts: (req, res) => {
        let panel = 'products'
        const productList = productsController.getAllProducts();
        res.render("admin-home", { productList, panel} )
    },
    getProductById: (req, res) => {
        let panel = 'product-details'
        let product = productsController.getProductById(req.params.id);
        res.render("admin-home", { panel, product })
    },
    createProduct: (req, res) => {
        let panel = 'product-create'
        res.render("admin-home", { panel })
    },
    saveProduct: (req, res) => {
        let panel = 'product-details'
        let product = productsController.saveProduct (req,res);
        res.render("admin-home", { panel, product })
    },
    deleteProduct: (req, res) => {
        deleteProduct(req.params.id)
        let usersList = {
            users : getAllUsers()
        };
        res.render('index', { usersList: usersList })
    }
}

module.exports = adminProductsController;
