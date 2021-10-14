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
    getById: async (req, res) => {
        let panel = 'product-details'
        let product = await productsController.getById(req.params.id);
        res.render("admin-home", { panel, product })
    },
    create: (req, res) => {
        let panel = 'product-create'
        res.render("admin-home", { panel })
    },
    save: async (req, res) => {
        const product = await productsController.save(req, res);
        if (product) {
            let panel = 'product-details'
            res.render("admin-home", { panel, product })
        }
    },
    update: async (req, res) => {
        const product = await productsController.update(req, res);
        if (product) {
            let panel = 'product-details'
            res.render("admin-home", { panel, product })
        }
    },
    remove: async(req, res) => {
        const removeStatus = await productsController.remove(req.params.id)
        if(removeStatus.status) {
            try {
                let panel = 'products'
                const productList = await productsController.getAll();
                res.status(200).render("admin-home", { productList, panel} )
            } catch (error) {
                res.status(500).render("admin-home", { error: error.message} )
            }   
        } else {
            res.status(500).render("admin-home", { error: removeStatus.msg} )
        }
    }
}

module.exports = adminProductsController;
