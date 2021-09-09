/* type: 1 - camiseta | 2- caneca*/
let products = [
    {
        id: 1,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        images: [{
            imgPath: '/img/products/Disney/camisetas/alice-in-wonderland.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/darth-vader.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/lion-king-simba.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu.png',
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
            imgPath: '/img/products/Disney/camisetas/darth-vader.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/darth-vader.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/darth-vader.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/darth-vader.png',
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
            imgPath: '/img/products/Disney/camisetas/lion-king-simba.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/lion-king-simba.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/lion-king-simba.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/lion-king-simba.png',
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
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/madalorian-grogu.png',
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
            imgPath: '/img/products/Disney/camisetas/toy-story-forky.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/toy-story-forky.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/toy-story-forky.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/toy-story-forky.png',
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
            imgPath: '/img/products/Disney/camisetas/toy-story-woody.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/toy-story-woody.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/toy-story-woody.png',
        }, {
            imgPath: '/img/products/Disney/camisetas/toy-story-woody.png',
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
            imgPath: '/img/products/Marvel/camisetas/deadpool-venom.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/deadpool-venom.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/deadpool-venom.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/deadpool-venom.png',
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
            imgPath: '/img/products/Marvel/camisetas/manopla-do-infinito.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/manopla-do-infinito.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/manopla-do-infinito.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/manopla-do-infinito.png',
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
            imgPath: '/img/products/Marvel/camisetas/spider-man.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/spider-man.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/spider-man.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/spider-man.png',
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
            imgPath: '/img/products/Marvel/camisetas/stan-lee.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/stan-lee.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/stan-lee.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/stan-lee.png',
        }],
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
        images: [{
            imgPath: '/img/products/Marvel/camisetas/thanos.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/thanos.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/thanos.png',
        }, {
            imgPath: '/img/products/Marvel/camisetas/thanos.png',
        }],
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
        images: [{
            imgPath: '/img/products/Marvel/canecas/deadpool-venom.png',
        }, {
            imgPath: '/img/products/Marvel/canecas/deadpool-venom.png',
        }, {
            imgPath: '/img/products/Marvel/canecas/deadpool-venom.png',
        }, {
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
            imgPath: '/img/products/Marvel/canecas/manopla-do-infinito.png',
        }, {
            imgPath: '/img/products/Marvel/canecas/manopla-do-infinito.png',
        }, {
            imgPath: '/img/products/Marvel/canecas/manopla-do-infinito.png',
        }, {
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
            imgPath: '/img/products/Marvel/canecas/spider-man.png',
        }, {
            imgPath: '/img/products/Marvel/canecas/spider-man.png',
        }, {
            imgPath: '/img/products/Marvel/canecas/spider-man.png',
        }, {
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
            imgPath: '/img/products/Marvel/canecas/stan-lee.png',
        }, {
            imgPath: '/img/products/Marvel/canecas/stan-lee.png',
        }, {
            imgPath: '/img/products/Marvel/canecas/stan-lee.png',
        }, {
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
            imgPath: '/img/products/Disney/canecas/alice-in-wonderland.png',
        }, {
            imgPath: '/img/products/Disney/canecas/alice-in-wonderland.png',
        }, {
            imgPath: '/img/products/Disney/canecas/alice-in-wonderland.png',
        }, {
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
            imgPath: '/img/products/Disney/canecas/darth-vader.png',
        }, {
            imgPath: '/img/products/Disney/canecas/darth-vader.png',
        }, {
            imgPath: '/img/products/Disney/canecas/darth-vader.png',
        }, {
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
            imgPath: '/img/products/Disney/canecas/lion-king-simba.png',
        }, {
            imgPath: '/img/products/Disney/canecas/lion-king-simba.png',
        }, {
            imgPath: '/img/products/Disney/canecas/lion-king-simba.png',
        }, {
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
            imgPath: '/img/products/Disney/canecas/mandalorian-grogu.png',
        }, {
            imgPath: '/img/products/Disney/canecas/mandalorian-grogu.png',
        }, {
            imgPath: '/img/products/Disney/canecas/mandalorian-grogu.png',
        }, {
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
            imgPath: '/img/products/Disney/canecas/toy-story-woody.png',
        }, {
            imgPath: '/img/products/Disney/canecas/toy-story-woody.png',
        }, {
            imgPath: '/img/products/Disney/canecas/toy-story-woody.png',
        }, {
            imgPath: '/img/products/Disney/canecas/toy-story-woody.png',
        }],
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40',
        status: 'Ativo'
    }
  ]; 

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

function getBannerList() {
    return banners;
}




module.exports = productsController;

