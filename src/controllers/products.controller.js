const productsController = {
    getAllProducts: (req, res)=> {
        const productList = getAllProducts();
        res.render("products", { productList } )
    },
    getProductsbyType: (req, res)=> {
        let productList = getProductsbyType(req.params.type)
        res.render("products", { productList })
    },
    getProductsbyTheme: (req, res)=> {
        let productList = getProdutosbyTheme(req.params.theme)
        res.render("products", { productList })
    },
    getProductsbyName: (req, res)=> {
        let productList = getProductbyName(req.params.name)
        res.render("products", { productList })
    }
}

/* type: 1 - camiseta | 2- caneca*/
const products = [
    {
        id: 1,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        imgPath: "/img/products/Disney/camisetas/alice-in-wonderland.png",
        installmentParts:5,
        installmentPrice: 10.18,
        atSightPrice: 50.90
    },
    {
        id: 2,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA DARTH VADER",
        imgPath: "/img/products/Disney/camisetas/darth-vader.png",
        installmentParts:5,
        installmentPrice: 10.18,
        atSightPrice: 50.90
    },
    {
        id: 3,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA O REI LEÃO - SIMBA",
        imgPath: "/img/products/Disney/camisetas/lion-king-simba.png",
        installmentParts:5,
        installmentPrice: 10.18,
        atSightPrice: 50.90
    },
    {
        id: 4,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA MADALORIAN - GROGU",
        imgPath: "/img/products/Disney/camisetas/madalorian-grogu.png",
        installmentParts:5,
        installmentPrice: 10.18,
        atSightPrice: 50.90
    },
    {
        id: 5,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA TOY STORY - FORKY",
        imgPath: "/img/products/Disney/camisetas/toy-story-forky.png",
        installmentParts:5,
        installmentPrice: 10.18,
        atSightPrice: 50.90
    },
    {
        id: 6,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA TOY STORY - WOODY",
        imgPath: "/img/products/Disney/camisetas/toy-story-woody.png",
        installmentParts:5,
        installmentPrice: 10.18,
        atSightPrice: 50.90
    },
    {
        id: 7,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA DEADPOOL & VENOM",
        imgPath: "/img/products/Marvel/camisetas/deadpool-venom.png",
        installmentParts:5,
        installmentPrice: 13.25,
        atSightPrice: 66.25
    },
    {
        id: 8,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA VINGADORES - MANOPLA DO INFINITO",
        imgPath: "/img/products/Marvel/camisetas/manopla-do-infinito.png",
        installmentParts:5,
        installmentPrice: 13.25,
        atSightPrice: 66.25
    },
    {
        id: 9,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA HOMEM-ARANHA",
        imgPath: "/img/products/Marvel/camisetas/spider-man.png",
        installmentParts:5,
        installmentPrice: 13.25,
        atSightPrice: 66.25
    },
    {
        id: 10,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA MARVEL - STAN LEE",
        imgPath: "/img/products/Marvel/camisetas/stan-lee.png",
        installmentParts:5,
        installmentPrice: 13.25,
        atSightPrice: 66.25
    },
    {
        id: 11,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA THANOS",
        imgPath: "/img/products/Marvel/camisetas/thanos.png",
        installmentParts:5,
        installmentPrice: 13.25,
        atSightPrice: 66.25
    },
    {
        id: 12,
        type: 2,
        theme: "Marvel",
        description: "CANECA BRANCA DEADPOOL & VENOM",
        imgPath: "/img/products/Marvel/canecas/deadpoll-venom.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    },
    {
        id: 13,
        type: 2,
        theme: "Marvel",
        description: "CANECA BRANCA VINGADORES - MANOPLA DO INFINITO",
        imgPath: "/img/products/Marvel/canecas/manopla-do-infinito.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    },
    {
        id: 14,
        type: 2,
        theme: "Marvel",
        description: "CANECA BRANCA HOMEM-ARANHA",
        imgPath: "/img/products/Marvel/canecas/spider-man.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    },
    {
        id: 15,
        type: 2,
        theme: "Marvel",
        description: "CANECA BRANCA MARVEL - STAN LEE",
        imgPath: "/img/products/Marvel/canecas/stan-lee.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    },
    {
        id: 16,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        imgPath: "/img/products/Disney/canecas/alice-in-wonderland.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    },
    {
        id: 17,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA DARTH VADER",
        imgPath: "/img/products/Disney/canecas/darth-vader.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    },
    {
        id: 18,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA O REI LEÃO - SIMBA",
        imgPath: "/img/products/Disney/canecas/lion-king-simba.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    },
    {
        id: 19,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA MADALORIAN - GROGU",
        imgPath: "/img/products/Disney/canecas/madalorian-grogu.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    },
    {
        id: 20,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA TOY STORY - WOODY",
        imgPath: "/img/products/Disney/canecas/toy-story-woody.png",
        installmentParts:5,
        installmentPrice: 6.48,
        atSightPrice: 32.40
    }
  ];

function getAllProducts() {
    /*console.log(products)*/
    return products
}

function getProductsbyType(productType) {
   /* console.log ('Entrou na função getProductsbyType. Parametro recebido: ' + productType)*/
    let productList = products.filter( (product) => productType == product.type )
    /*console.log('Filtro Aplicado: ' + productList)*/
    return productList
}

module.exports = productsController;

