/* type: 1 - camiseta | 2- caneca*/
const products = [
    {
        id: 1,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        imgPath: "/img/products/Disney/camisetas/alice-in-wonderland.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90'
    },
    {
        id: 2,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA DARTH VADER",
        imgPath: "/img/products/Disney/camisetas/darth-vader.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90'
    },
    {
        id: 3,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA O REI LEÃO - SIMBA",
        imgPath: "/img/products/Disney/camisetas/lion-king-simba.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90'
    },
    {
        id: 4,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA MADALORIAN - GROGU",
        imgPath: "/img/products/Disney/camisetas/madalorian-grogu.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90'
    },
    {
        id: 5,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA TOY STORY - FORKY",
        imgPath: "/img/products/Disney/camisetas/toy-story-forky.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90'
    },
    {
        id: 6,
        type: 'clothes',
        theme: "Disney",
        description: "CAMISETA BRANCA TOY STORY - WOODY",
        imgPath: "/img/products/Disney/camisetas/toy-story-woody.png",
        installmentParts:5,
        installmentPrice: '10,18',
        atSightPrice: '50,90'
    },
    {
        id: 7,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA DEADPOOL & VENOM",
        imgPath: "/img/products/Marvel/camisetas/deadpool-venom.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25'
    },
    {
        id: 8,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA MANOPLA DO INFINITO",
        imgPath: "/img/products/Marvel/camisetas/manopla-do-infinito.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25'
    },
    {
        id: 9,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA HOMEM-ARANHA",
        imgPath: "/img/products/Marvel/camisetas/spider-man.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25'
    },
    {
        id: 10,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA MARVEL - STAN LEE",
        imgPath: "/img/products/Marvel/camisetas/stan-lee.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25'
    },
    {
        id: 11,
        type: 'clothes',
        theme: "Marvel",
        description: "CAMISETA BRANCA THANOS",
        imgPath: "/img/products/Marvel/camisetas/thanos.png",
        installmentParts:5,
        installmentPrice: '13,25',
        atSightPrice: '66,25'
    },
    {
        id: 12,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA DEADPOOL & VENOM",
        imgPath: "/img/products/Marvel/canecas/deadpool-venom.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40'
    },
    {
        id: 13,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA MANOPLA DO INFINITO",
        imgPath: "/img/products/Marvel/canecas/manopla-do-infinito.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40'
    },
    {
        id: 14,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA HOMEM-ARANHA",
        imgPath: "/img/products/Marvel/canecas/spider-man.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40'
    },
    {
        id: 15,
        type: 'mugs',
        theme: "Marvel",
        description: "CANECA BRANCA MARVEL - STAN LEE",
        imgPath: "/img/products/Marvel/canecas/stan-lee.png",
        installmentParts:5,
        installmentPrice:'6,48',
        atSightPrice: '32,40'
    },
    {
        id: 16,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        imgPath: "/img/products/Disney/canecas/alice-in-wonderland.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40'
    },
    {
        id: 17,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA DARTH VADER",
        imgPath: "/img/products/Disney/canecas/darth-vader.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40'
    },
    {
        id: 18,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA O REI LEÃO - SIMBA",
        imgPath: "/img/products/Disney/canecas/lion-king-simba.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40'
    },
    {
        id: 19,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA MANDALORIAN - GROGU",
        imgPath: "/img/products/Disney/canecas/mandalorian-grogu.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40'
    },
    {
        id: 20,
        type: 'mugs',
        theme: "Disney",
        description: "CANECA BRANCA TOY STORY - WOODY",
        imgPath: "/img/products/Disney/canecas/toy-story-woody.png",
        installmentParts:5,
        installmentPrice: '6,48',
        atSightPrice: '32,40'
    }
  ];

  const fs = require('fs');
const { get } = require('../routes/products.router');

  const productsController = {
    getAllProducts: (req, res)=> {
        let returnType = 'objectList'
        const productList = getAllProducts();
        const bannerList = getBannerList();
        res.render("home", { productList, bannerList, returnType} )
    },
    getProductByFilter: (req, res)=> {
        const bannerList = getBannerList();
        if(req.params.param === 'id') {
            let returnType = 'singleObject'
            let product = getProductById(req.params.value)
            res.render("home", {product, bannerList, returnType})
        } else {
            if (req.params.param == 'type') {
                let returnType = 'objectList'
                let productList = getProductsByType(req.params.value)
                res.render("home", {productList, bannerList, returnType})
            }
        }
    }
}

const banners = [
    '/img/banners/banner-caneca-eu-sou-quadrado.png',
    '/img/banners/banner-caneca.jpg',
    '/img/banners/banner-canecas-1591x420-copia.jpg',
    '/img/banners/CANECAS.jpg',
    '/img/banners/DragonBallDesktop.png',
    '/img/banners/justice-league-banner-2.jpg',
    '/img/banners/Lego-Marvel-Banner-1024x576-1.jpg',
    '/img/banners/Mario-Kart-8-Banner.jpg',
    '/img/banners/marvel-studios-first-10-years-banner-1081327.jpeg',
    '/img/banners/normal_oferta-personalize-camiseta-mais-caneca1.jpg'
];

function getAllProducts() {
    return products
}

function getProductById (productId) {
    return products.find((product)=> product.id == productId)
}

function getProductsByType(productType) {
    let productList = products.filter( (product) => productType == product.type )
    return productList
}

function getBannerList() {
    return banners
}

module.exports = productsController;

