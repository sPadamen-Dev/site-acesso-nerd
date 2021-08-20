const fs = require('fs');

const adminProductsController = {
    getAllProducts: (req, res) => {
        let panel = 'products'
        const productList = getAllProducts();
        res.render("admin-home", panel, productList)
    },
    getProductsByFilters: (req, res) => {
        let panel = 'products'
        const productList = getProductsByFilters();
        res.render("admin-home", panel, productList)
    }
}

function getAllProducts() {

    console.log('getAllProducts on Admin')
    let data = fs.readFileSync('../db/users.json', 'utf8');
    console.log(data)
    return undefined;


}

module.exports = adminProductsController;
