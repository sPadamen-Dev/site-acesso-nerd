const productsController = require('./products.controller')

const adminProductsController = {
    getAll: (req, res) => {
        let panel = 'products'
        const productList = productsController.getAllProducts();
        res.render("admin-home", { productList, panel} )
    },
    getById: (req, res) => {
        let panel = 'product-details'
        let product = productsController.getProductById(req.params.id);
        res.render("admin-home", { panel, product })
    },
    new: (req, res) => {
        let panel = 'product-create'
        res.render("admin-home", { panel })
    },
    create: (req, res) => {
        let panel = 'product-details'
        let product = productsController.saveProduct (req,res);
        res.render("admin-home", { panel, product })
    },
    update: (req, res) => {
        console.log(req.body);
        console.log(req.files); 
    },
    remove: (req, res) => {
        deleteProduct(req.params.id)
        let usersList = {
            users : getAllUsers()
        };
        res.render('index', { usersList: usersList })
    }
}

module.exports = adminProductsController;
