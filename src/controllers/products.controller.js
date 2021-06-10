const productsController = {
    getAllProducts: (req, res)=> {
        let productList = getAllProducts()
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
        imgPath: "/products/Disney/camisetas/alice-in-wonderland.png",
    },
    {
        id: 2,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA DARTH VADER",
        imgPath: "/products/Disney/camisetas/darth-vader.png",
    },
    {
        id: 3,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA O REI LEÃO - SIMBA",
        imgPath: "/products/Disney/camisetas/lion-king-simba.png",
    },
    {
        id: 4,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA MADALORIAN - GROGU",
        imgPath: "/products/Disney/camisetas/madalorian-grogu.png",
    },
    {
        id: 5,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA TOY STORY - FORKY",
        imgPath: "/products/Disney/camisetas/toy-story-forky.png",
    },
    {
        id: 6,
        type: 1,
        theme: "Disney",
        description: "CAMISETA BRANCA TOY STORY - WOODY",
        imgPath: "/products/Disney/camisetas/toy-story-woody.png",
    },
    {
        id: 7,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA DEADPOOL & VENOM",
        imgPath: "/products/Marvel/camisetas/deadpool-venom.png",
    },
    {
        id: 8,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA VINGADORES - MANOPLA DO INFINITO",
        imgPath: "/products/Marvel/camisetas/manopla-do-infinito.png",
    },
    {
        id: 9,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA HOMEM-ARANHA",
        imgPath: "/products/Marvel/camisetas/spider-man.png",
    },
    {
        id: 10,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA MARVEL - STAN LEE",
        imgPath: "/products/Marvel/camisetas/stan-lee.png",
    },
    {
        id: 11,
        type: 1,
        theme: "Marvel",
        description: "CAMISETA BRANCA THANOS",
        imgPath: "/products/Marvel/camisetas/thanos.png",
    },
    {
        id: 12,
        type: 2,
        theme: "Marvel",
        description: "CANECA BRANCA DEADPOOL & VENOM",
        imgPath: "/products/Marvel/canecas/deadpoll-venom.png",
    },
    {
        id: 13,
        type: 2,
        theme: "Marvel",
        description: "CANECA BRANCA VINGADORES - MANOPLA DO INFINITO",
        imgPath: "/products/Marvel/canecas/manopla-do-infinito.png",
    },
    {
        id: 14,
        type: 2,
        theme: "Marvel",
        description: "CANECA BRANCA HOMEM-ARANHA",
        imgPath: "/products/Marvel/canecas/spider-man.png",
    },
    {
        id: 15,
        type: 2,
        theme: "Marvel",
        description: "CANECA BRANCA MARVEL - STAN LEE",
        imgPath: "/products/Marvel/canecas/stan-lee.png",
    },
    {
        id: 16,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA ALICE NO PAÍS DAS MARAVILHAS",
        imgPath: "/products/Disney/canecas/alice-in-wonderland.png",
    },
    {
        id: 17,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA DARTH VADER",
        imgPath: "/products/Disney/canecas/darth-vader.png",
    },
    {
        id: 18,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA O REI LEÃO - SIMBA",
        imgPath: "/products/Disney/canecas/lion-king-simba.png",
    },
    {
        id: 19,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA MADALORIAN - GROGU",
        imgPath: "/products/Disney/canecas/madalorian-grogu.png",
    },
    {
        id: 20,
        type: 2,
        theme: "Disney",
        description: "CANECA BRANCA TOY STORY - WOODY",
        imgPath: "/products/Disney/canecas/toy-story-woody.png",
    }
  ];

function getAllProducts() {
    return {products: products}
}

function getProductsbyType(productType) {
    return products.find( (product) => productType == product.type )
}

module.exports = productsController;

