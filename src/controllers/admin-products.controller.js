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

        console.log(req.body)
        const { id, type, theme, description, installmentParts, installmentPrice, atSightPrice } = req.body
        console.log('entrou no edit product - id: ', id)
        console.log('req: ', req )

        if (req.files) {
            let { filename } = req.files
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
