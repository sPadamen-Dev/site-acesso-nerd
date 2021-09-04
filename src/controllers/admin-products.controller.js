const imgPathHolder = '/img/placeHolderProductImage.jpg'
/* type: 1 - camiseta | 2- caneca*/
let products = [
    {
        id: 1,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        /*imgPath: "", /*"/img/products/Disney/camisetas/alice-in-wonderland.png"*/
        images: [{
            imgPath: '/img/products/Disney/camisetas/alice-in-wonderland.png',
            imgType: 'S'
        }, {
            imgPath: '/img/products/Disney/camisetas/darth-vader.png',
            imgType: 'M'
        }, {
            imgPath: '/img/products/Disney/camisetas/lion-king-simba.png',
            imgType: 'S'
        }, {
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu.png',
            imgType: 'S'
        }],
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90',
        status: 'Inativo'
    },
    {
        id: 2,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA DARTH VADER",
        /*imgPath: "/img/products/Disney/camisetas/darth-vader.png",*/
        images:[{
            imgPath:'',
            imgType:''
        }],
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90',
        status: 'Ativo'
    }/*,
    {
        id: 3,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA O REI LEÃO - SIMBA",
        imgPath: "/img/products/Disney/camisetas/lion-king-simba.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90',
        status: 'Ativo'
    },
    {
        id: 4,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA MADALORIAN - GROGU",
        imgPath: "/img/products/Disney/camisetas/madalorian-grogu.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90',
        status: 'Ativo'
    },
    {
        id: 5,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA TOY STORY - FORKY",
        imgPath: "/img/products/Disney/camisetas/toy-story-forky.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90',
        status: 'Ativo'
    },
    {
        id: 6,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA TOY STORY - WOODY",
        imgPath: "/img/products/Disney/camisetas/toy-story-woody.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90',
        status: 'Ativo'
    },
    {
        id: 7,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA DEADPOOL & VENOM",
        imgPath: "/img/products/Marvel/camisetas/deadpool-venom.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25',
        status: 'Ativo'
    },
    {
        id: 8,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA MANOPLA DO INFINITO",
        imgPath: "/img/products/Marvel/camisetas/manopla-do-infinito.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25',
        status: 'Ativo'
    },
    {
        id: 9,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA HOMEM-ARANHA",
        imgPath: "/img/products/Marvel/camisetas/spider-man.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25',
        status: 'Ativo'
    },
    {
        id: 10,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA MARVEL - STAN LEE",
        imgPath: "/img/products/Marvel/camisetas/stan-lee.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25',
        status: 'Ativo'
    },
    {
        id: 11,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA THANOS",
        imgPath: "/img/products/Marvel/camisetas/thanos.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25',
        status: 'Ativo'
    },
    {
        id: 12,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA DEADPOOL & VENOM",
        imgPath: "/img/products/Marvel/canecas/deadpool-venom.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    },
    {
        id: 13,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA MANOPLA DO INFINITO",
        imgPath: "/img/products/Marvel/canecas/manopla-do-infinito.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    },
    {
        id: 14,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA HOMEM-ARANHA",
        imgPath: "/img/products/Marvel/canecas/spider-man.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    },
    {
        id: 15,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA MARVEL - STAN LEE",
        imgPath: "/img/products/Marvel/canecas/stan-lee.png",
        installmentParts:5,
        installmentPrice:'6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    },
    {
        id: 16,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        imgPath: "/img/products/Disney/canecas/alice-in-wonderland.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    },
    {
        id: 17,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA DARTH VADER",
        imgPath: "/img/products/Disney/canecas/darth-vader.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    },
    {
        id: 18,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA O REI LEÃO - SIMBA",
        imgPath: "/img/products/Disney/canecas/lion-king-simba.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    },
    {
        id: 19,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA MANDALORIAN - GROGU",
        imgPath: "/img/products/Disney/canecas/mandalorian-grogu.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    },
    {
        id: 20,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA TOY STORY - WOODY",
        imgPath: "/img/products/Disney/canecas/toy-story-woody.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
<<<<<<< HEAD
    }*/
  ]; 
const adminProductsController = {
    getAllProducts: (req, res) => {
        let panel = 'products'
        const productList = getAllProducts();
        res.render("admin-home", { productList, panel} )
    },
    getProductsByFilters: (req, res) => {
        let panel = 'products'
        const productList = getProductsByFilters();
        res.render("admin-home", { panel, productList})
    },
    getProductDetails: (req, res) => {
        let panel = 'product-details'
        let product = getProductDetails(req.params.id);
        
        if (product.images == undefined) {
            product.images = [{
                imgPath: imgPathHolder,
                imgType: 'M'
            }]
        }

        console.log('meu produto: ', product)
        res.render("admin-home", { panel, product })
        
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

function getAllProducts() {

    products.forEach((product, index)=> {
        if (!product.images[0].imgPath) {
            product.images[0].imgPath = imgPathHolder
            product.images[0].imgType = 'M'
        }
    })
    return products;
}

function getProductDetails (productId) {
    console.log('entrou em getProductDetails')
    let product = products.find((product)=> product.id == productId)
    
    if (!product.images[0].imgPath) {
        console.log('entrou aqui: ', product.images)
        product.images[0].imgPath = imgPathHolder
        product.images[0].imgType = 'M'
    }
    return product
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
