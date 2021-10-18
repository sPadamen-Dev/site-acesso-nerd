const { Product, sequelize } = require('../database/models')
const fs = require('fs')

const banners = [
    '/img/banners/banner-acesso-nerd-star-wars.jpg',
    '/img/banners/banner-acesso-nerd-scooby.jpg'
];

const productsController = {
    getAll: async (req, res)=> {
        const productList = await getAll();
        return productList;
    },
    getById: async (productId)=> {
        let product = await getById(productId)
        return product;
    },
    getByFilter: async (req, res)=> {
        const productList = await getByFilter(req);
        return productList;
    },
    save: async (req, res) => {
        const product = await save(req, res);
        return product;
    },
    update: async (req, res) => {
        const product = await update(req, res);
        return product;
    },
    remove: async (product_id) => {
        const remove_status = await remove(product_id)
        return remove_status
    },
    getAllBanners: async (req, res)=> {
        const bannerList = await getBannerList();
        return bannerList;
    },
    deletePicById: (req, res)=> {
        if (req.imgList.lenght > 0) {
            deletePicById(req.imgList);
        }
    }
}

async function getAll() {
    const productList = await Product.findAll();
    return productList
}

async function getById(id) {
    const product = await Product.findByPk(id)
    return product
}

async function getByFilter (req) {
    let productList =[]
    if (req.params.prmfield == 'category') {
        productList = await Product.findAll({
            where: {
                category: req.params.prmvalue 
            }
        });
    }
    return productList
}

async function save (req, res) {
    let imgPath = null;
    let { name, description, category, price, installment_parts, installment_price, one_size, es_size, s_size, m_size, l_size, el_size, status } = req.body;
    if (req.file) {
        const { filename } = req.file
        imgPath = `/img/products/${filename}`;
    }

    const product = {
        name, 
        description,
        category,
        price, 
        installment_parts, 
        installment_price, 
        imgPath, 
        one_size, 
        es_size, 
        s_size, 
        m_size, 
        l_size, 
        el_size, 
        status
    }

    const newProduct = await Product.create( product )
    if (newProduct instanceof Product) {
        return await getById(newProduct.product_id)
    } 
}

async function update (req, res) {
    let { product_id, name, description, category, price, installment_parts, installment_price, one_size, es_size, s_size, m_size, l_size, el_size, status, imgPath, initialImg, deletedImg } = req.body;

    /* Deleting old pic */
    if ( deletedImg === 'S' ) {
        if (initialImg) {
           /*deletePicByFilename(initialImg)*/
            initialImg = null;
        }
    }

    if (req.file) {
        const { filename } = req.file
        imgPath = `/img/products/${filename}`;
    } else {
        if (initialImg) {
            imgPath = initialImg;
        }
    }
    
    const prod = await Product.findOne( {where:{ product_id: product_id}})

    // Updates the prod payload
    prod.name = name
    prod.description = description
    prod.category = category
    prod.price = price
    prod.installment_parts = installment_parts
    prod.installment_price = installment_price
    if (imgPath) {
        prod.imgPath = imgPath;
    } else {
        prod.imgPath = null;
    }
    prod.one_size = one_size
    prod.es_size = es_size
    prod.s_size = s_size
    prod.m_size = m_size
    prod.l_size = l_size
    prod.el_size = el_size 
    prod.status = status;

    const product = await prod.save()
    return product
}

async function remove(product_id) {  

    const {imgPath} = await Product.findOne( {where:{ product_id: product_id}})

    let removeStatus = {
        status: 'false',
        msg: 'Erro ao excluir produto'
    }
    
    Product.destroy({ where: {product_id: product_id}})
        .then(async function (rowRemoved){
            if(rowRemoved === 1) {
                try {
                    if (imgPath) {
                        /*deletePicByFilename(imgPath)*/
                    }
                    removeStatus.status = true
                    removeStatus.msg = 'Produto excluído com sucesso!'
                } catch (error) {
                    removeStatus.msg = `Erro ao excluir produto: ${error}`
                } 
            }
        }, function(err) {
            removeStatus.msg = `Erro ao excluir produto: ${err}`
    });
    return removeStatus
}

async function getBannerList() {
    return banners;
}

/*TO DO: FIX THE FUNCTION - FILE IS NOT BEING REMOVED*/
function deletePicById(imgList) {
    imgList.forEach(imgId=>{
        console.log(`deletando img. Id: ${imgId} `)
    })
}

function deletePicByFilename(fileToDelete){
    fs.unlink(fileToDelete, function (err) {
        if(err) {
            console.log(err)
        }
        console.log(`${fileToDelete} was deleted`);
    });
}
 

module.exports = productsController;

