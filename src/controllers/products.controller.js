const { Product, sequelize } = require('../database/models')
const { QueryTypes } = require('sequelize');

const imgPathHolder = '/img/placeHolderProductImage.jpg'
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
    getAllBanners: async (req, res)=> {
        const bannerList = await getBannerList();
        return bannerList;
    },
    /*saveProduct: (req, res) => {
        
        console.log('entrou no save da controller produto')
        console.log(req.files)
        let product;

        if (req.files) {
            const images = req.files
            console.log(`encontro arquivos: ${images}`)
            console.log(req.body)
            product = addProduct( req.body, images );
        } else {
            product = addProduct( req.body, imgPathHolder );
        }
        return product;
    },*/
    editProduct: (req, res) => {

        console.log(req.body)
        const { id, type, theme, description, installmentParts, installmentPrice, atSightPrice } = req.body
        console.log('req: ', req )

        if (req.files) {
            let { filename } = req.files
            editProduct( type, theme, description, installmentParts, installmentPrice, atSightPrice  , `/images/${filename}` );
        } else { 
            editProduct( type, theme, description, installmentParts, installmentPrice, atSightPrice , imgPathHolder );
        }
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

async function save(req, res) {
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

function editProduct (id, type, theme, description, images, installmentParts, installmentPrice, atSightPrice) {
    
/*    let objectIndex = products.findIndex( (product) => id == product.id )
    products[objectIndex].type = type
    products[objectIndex].theme = theme
    products[objectIndex].description = description
    products[objectIndex].images = images 
    products[objectIndex].installmentParts = installmentParts
    products[objectIndex].installmentPrice = installmentPrice
    products[objectIndex].atSightPrice = atSightPrice */
}

function deletePicById(imgList) {
    imgList.forEach(imgId=>{
        console.log(`deletando img. Id: ${imgId} `)
    })
}

async function getBannerList() {
    return banners;
}


function addProduct (object, pictures) {
    let id = 1
    if (products.length > 0) {
        id = products[products.length -1].id + 1;
    }

    console.log('images: ', pictures)
    let images = [];

    pictures.forEach( pic => {
        images.push (
            {
                id:1 ,
                imgPath: pic.destination + pic.originalname
            }
        )
    })

    console.log ('Produto: ', object)
    let {type, theme, description, installmentParts, installmentPrice, atSightPrice, status } = object

    /* normalização dos dados*/
    if (description) {
        description = description.toUpperCase();
    }

    const product = { id, type, theme, description, images, installmentParts, installmentPrice, atSightPrice, status }
    products.push (product)

    console.log ('Produto Criado: ', product)

    return getById(product.product_id)
}



module.exports = productsController;

