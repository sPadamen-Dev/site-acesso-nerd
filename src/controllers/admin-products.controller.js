const productsController = require('./products.controller')

const adminProductsController = {
    getAll: async (req, res) => {
        try {
            let panel = 'products'
            const productList = await productsController.getAll();
            res.status(200).render("admin-home", { productList, panel} )
        } catch (error) {
            res.status(500).render("admin-home", { error: error.message} )
        }        
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
