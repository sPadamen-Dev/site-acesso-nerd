/* type: 1 - camiseta | 2- caneca*/
let products = [
    {
        id: 1,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        images: [{
            id:1,
            imgPath: '/img/products/Disney/camisetas/alice-in-wonderland.png',
        }, {
            id: 2,
            imgPath: '/img/products/Disney/camisetas/alice-in-wonderland2.png',
        }, {
            id: 3,
            imgPath: '/img/products/Disney/camisetas/alice-in-wonderland3.png',
        }, {
            id: 4,
            imgPath: '/img/products/Disney/camisetas/alice-in-wonderland4.png',
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
        images: [{
            id: 5,
            imgPath: '/img/products/Disney/camisetas/darth-vader.png',
        }, {
            id: 6,
            imgPath: '/img/products/Disney/camisetas/darth-vader2.png',
        }, {
            id: 12,
            imgPath: '/img/products/Disney/camisetas/darth-vader3.png',
        }, {
            id: 13,
            imgPath: '/img/products/Disney/camisetas/darth-vader4.png',
        }],
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90',
        status: 'Ativo'
    },
    {
        id: 3,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA O REI LEÃO - SIMBA",
        images: [{
            id: 7,
            imgPath: '/img/products/Disney/camisetas/lion-king-simba.png',
        }, {
            id: 8,
            imgPath: '/img/products/Disney/camisetas/lion-king-simba2.png',
        }, {
            id: 9,
            imgPath: '/img/products/Disney/camisetas/lion-king-simba3.png',
        }, {
            id: 10,
            imgPath: '/img/products/Disney/camisetas/lion-king-simba4.png',
        }],
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
        images: [{
            id: 11,
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu.png',
        }, {
            id: 14,
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu2.png',
        }, {
            id: 15,
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu3.png',
        }, {
            id: 16,
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu4.png',
        }],
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
        images: [{
            id: 17,
            imgPath: '/img/products/Disney/camisetas/toy-story-forky.png',
        }, {
            id: 18,
            imgPath: '/img/products/Disney/camisetas/toy-story-forky2.png',
        }, {
            id: 19,
            imgPath: '/img/products/Disney/camisetas/toy-story-forky3.png',
        }, {
            id: 20,
            imgPath: '/img/products/Disney/camisetas/toy-story-forky4.png',
        }],
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
        images: [{
            id: 21,
            imgPath: '/img/products/Disney/camisetas/toy-story-woody.png',
        }, {
            id: 22,
            imgPath: '/img/products/Disney/camisetas/toy-story-woody2.png',
        }, {
            id: 23,
            imgPath: '/img/products/Disney/camisetas/toy-story-woody3.png',
        }, {
            id: 24,
            imgPath: '/img/products/Disney/camisetas/toy-story-woody4.png',
        }],
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
        images: [{
            id: 25,
            imgPath: '/img/products/Marvel/camisetas/deadpool-venom.png',
        }, {
            id: 26,
            imgPath: '/img/products/Marvel/camisetas/deadpool-venom2.png',
        }, {
            id: 27,
            imgPath: '/img/products/Marvel/camisetas/deadpool-venom3.png',
        }, {
            id: 28,
            imgPath: '/img/products/Marvel/camisetas/deadpool-venom4.png',
        }],
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
        images: [{
            id: 29,
            imgPath: '/img/products/Marvel/camisetas/manopla-do-infinito.png',
        }, {
            id: 30,
            imgPath: '/img/products/Marvel/camisetas/manopla-do-infinito2.png',
        }, {
            id: 31,
            imgPath: '/img/products/Marvel/camisetas/manopla-do-infinito3.png',
        }, {
            id: 32,
            imgPath: '/img/products/Marvel/camisetas/manopla-do-infinito4.png',
        }],
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
        images: [{
            id: 33,
            imgPath: '/img/products/Marvel/camisetas/spider-man.png',
        }, {
            id: 34,
            imgPath: '/img/products/Marvel/camisetas/spider-man2.png',
        }, {
            id: 35,
            imgPath: '/img/products/Marvel/camisetas/spider-man3.png',
        }, {
            id: 36,
            imgPath: '/img/products/Marvel/camisetas/spider-man4.png',
        }],
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
        images: [{
            id: 37,
            imgPath: '/img/products/Marvel/camisetas/stan-lee.png',
        }, {
            id: 38,
            imgPath: '/img/products/Marvel/camisetas/stan-lee2.png',
        }, {
            id: 39,
            imgPath: '/img/products/Marvel/camisetas/stan-lee3.png',
        }, {
            id: 40,
            imgPath: '/img/products/Marvel/camisetas/stan-lee4.png',
        }],
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25',
        status: 'Ativo'
    },
    /*{
        id: 11,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA THANOS",
        images: [{
            id: 41,
            imgPath: '/img/products/Marvel/camisetas/thanos.png',
        }, {
            id: 42,
            imgPath: '/img/products/Marvel/camisetas/thanos2.png',
        }, {
            id: 43,
            imgPath: '/img/products/Marvel/camisetas/thanos3.png',
        }, {
            id: 44,
            imgPath: '/img/products/Marvel/camisetas/thanos4.png',
        }],
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25',
        status: 'Ativo'
    },*/
    {
        id: 12,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA DEADPOOL & VENOM",
        images: [{
            id: 45,
            imgPath: '/img/products/Marvel/canecas/deadpool-venom.png',
        }, {
            id: 46,
            imgPath: '/img/products/Marvel/canecas/deadpool-venom.png',
        }, {
            id: 47,
            imgPath: '/img/products/Marvel/canecas/deadpool-venom.png',
        }, {
            id: 48,
            imgPath: '/img/products/Marvel/canecas/deadpool-venom.png',
        }],
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
        images: [{
            id: 49,
            imgPath: '/img/products/Marvel/canecas/manopla-do-infinito.png',
        }, {
            id: 50,
            imgPath: '/img/products/Marvel/canecas/manopla-do-infinito.png',
        }, {
            id: 51,
            imgPath: '/img/products/Marvel/canecas/manopla-do-infinito.png',
        }, {
            id: 52,
            imgPath: '/img/products/Marvel/canecas/manopla-do-infinito.png',
        }],
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
        images: [{
            id: 53,
            imgPath: '/img/products/Marvel/canecas/spider-man.png',
        }, {
            id: 54,
            imgPath: '/img/products/Marvel/canecas/spider-man.png',
        }, {
            id: 55,
            imgPath: '/img/products/Marvel/canecas/spider-man.png',
        }, {
            id: 56,
            imgPath: '/img/products/Marvel/canecas/spider-man.png',
        }],
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
        images: [{
            id: 57,
            imgPath: '/img/products/Marvel/canecas/stan-lee.png',
        }, {
            id: 58,
            imgPath: '/img/products/Marvel/canecas/stan-lee.png',
        }, {
            id: 59,
            imgPath: '/img/products/Marvel/canecas/stan-lee.png',
        }, {
            id: 60,
            imgPath: '/img/products/Marvel/canecas/stan-lee.png',
        }],
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
        images: [{
            id: 61,
            imgPath: '/img/products/Disney/canecas/alice-in-wonderland.png',
        }, {
            id: 62,
            imgPath: '/img/products/Disney/canecas/alice-in-wonderland.png',
        }, {
            id: 63,
            imgPath: '/img/products/Disney/canecas/alice-in-wonderland.png',
        }, {
            id: 64,
            imgPath: '/img/products/Disney/canecas/alice-in-wonderland.png',
        }],
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
        images: [{
            id: 65,
            imgPath: '/img/products/Disney/canecas/darth-vader.png',
        }, {
            id: 66,
            imgPath: '/img/products/Disney/canecas/darth-vader.png',
        }, {
            id: 67,
            imgPath: '/img/products/Disney/canecas/darth-vader.png',
        }, {
            id: 68,
            imgPath: '/img/products/Disney/canecas/darth-vader.png',
        }],
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
        images: [{
            id: 69,
            imgPath: '/img/products/Disney/canecas/lion-king-simba.png',
        }, {
            id: 70,
            imgPath: '/img/products/Disney/canecas/lion-king-simba.png',
        }, {
            id: 71,
            imgPath: '/img/products/Disney/canecas/lion-king-simba.png',
        }, {
            id: 72,
            imgPath: '/img/products/Disney/canecas/lion-king-simba.png',
        }],
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
        images: [{
            id: 73,
            imgPath: '/img/products/Disney/canecas/mandalorian-grogu.png',
        }, {
            id: 74,
            imgPath: '/img/products/Disney/canecas/mandalorian-grogu.png',
        }, {
            id: 75,
            imgPath: '/img/products/Disney/canecas/mandalorian-grogu.png',
        }, {
            id: 76,
            imgPath: '/img/products/Disney/canecas/mandalorian-grogu.png',
        }],
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
        images: [{
            id: 77,
            imgPath: '/img/products/Disney/canecas/toy-story-woody.png',
        }, {
            id: 78,
            imgPath: '/img/products/Disney/canecas/toy-story-woody.png',
        }, {
            id: 79,
            imgPath: '/img/products/Disney/canecas/toy-story-woody.png',
        }, {
            id: 80,
            imgPath: '/img/products/Disney/canecas/toy-story-woody.png',
        }],
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    }
  ]; 

const imgPathHolder = '/img/placeHolderProductImage.jpg'
const banners = [
    '/img/banners/banner-acesso-nerd-star-wars.jpg',
    '/img/banners/banner-acesso-nerd-scooby.jpg'
];

  const productsController = {
    getAllProducts: (req, res)=> {
        const productList = getAllProducts();
        return productList;
    },
    getProductById: (productId)=> {
        let product = getProductById(productId)
        return product;
    },
    getProductByFilter: (req, res)=> {
        if (req.params.param == 'type') {
            let productList = getProductsByType(req.params.value)
            return productList;
        }
    },
    getAllBanners: (req, res)=> {
        const bannerList = getBannerList();
        return bannerList;
    },
    saveProduct: (req, res) => {
        
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
    },
    editProduct: (req, res) => {

        console.log(req.body)
        const { id, type, theme, description, installmentParts, installmentPrice, atSightPrice } = req.body
        console.log('req: ', req )

        if (req.files) {
            let { filename } = req.files
            editProduct( type, theme, description, installmentParts, installmentPrice, atSightPrice  , `/images/${filename}` );
        } else { 
            console.log('achou imagem')
            editProduct( type, theme, description, installmentParts, installmentPrice, atSightPrice , imgPathHolder );
        }
    },
    deletePicById: (req, res)=> {
        if (req.imgList.lenght > 0) {
            deletePicById(req.imgList);
        }
    }
}

function getAllProducts() {
    products.forEach((product, index)=> {
        if (product.images == undefined) {
            product.images = [{
                imgPath: imgPathHolder,
                imgType: 'M'
            }]
        }
    })
    return products;
}

function getProductById (productId) {
    let product = products.find((product)=> product.id == productId)
    if (product.images == undefined) {
        product.images = [{
            imgPath: imgPathHolder,
            imgType: 'M'
        }]
    }
    return product;
}

function getProductsByType(productType) {
    let productList = products.filter( (product) => productType == product.type )
    return productList;
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

function getBannerList() {
    return banners;
}


function addProduct (object, images) {
    let id = 1
    if (products.length > 0) {
        id = products[products.length -1].id + 1;
    }

    console.log('images: ', images)
    let imagesArray = [];

    images.forEach( imagem => {
        imagesArray.push (
            {
                id:1 ,
                imgPath: imagem
            }
        )
    })

    console.log ('Produto: ', object)
    let {type, theme, description, installmentParts, installmentPrice, atSightPrice, status } = object

    /* normalização dos dados*/
    if (description) {
        description = description.toUpperCase();
    }

    const product = { id, type, theme, description, installmentParts, installmentPrice, atSightPrice, status }
    products.push (product)

    console.log ('Produto Criado: ', product)

    return getProductById(product.id)
}



module.exports = productsController;

