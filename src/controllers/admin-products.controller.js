const imgPathHolder = '/img/placeHolderProductImage.jpg'
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
    getProductsByFilters: (req, res) => {
        let panel = 'products'
        const productList = getProductsByFilters();
        res.render("admin-home", { panel, productList})
    },
    editProduct: (req, res) => {
        const id = req.params.id
        const { type, theme, description, installmentParts, installmentPrice, atSightPrice } = req.body

        if (req.file) {
            let { filename } = req.file
            editProduct( type, theme, description, installmentParts, installmentPrice, atSightPrice  , `/images/${filename}` );
        } else { 
            console.log('achou imagem')
            editProduct( type, theme, description, installmentParts, installmentPrice, atSightPrice , imgPathHolder );
        }
    },
    deleteProduct: (req, res) => {
        deleteProduct(req.params.id)
        let usersList = {
            users : getAllUsers()
        };
        res.render('index', { usersList: usersList })
    }
}

function editProduct (id, type, theme, description, images, installmentParts, installmentPrice, atSightPrice) {
    
    let objectIndex = products.findIndex( (product) => id == product.id )
    products[objectIndex].type = type
    products[objectIndex].theme = theme
    products[objectIndex].description = description
    products[objectIndex].images = images 
    products[objectIndex].installmentParts = installmentParts
    products[objectIndex].installmentPrice = installmentPrice
    products[objectIndex].atSightPrice = atSightPrice 
}

module.exports = adminProductsController;
