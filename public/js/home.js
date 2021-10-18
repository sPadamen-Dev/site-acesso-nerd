function searchProducts() {
    url = '/products/' + document.getElementById("search").value
    window.open(url, '_blank');
}

function searchProductsbyType(productType) {
    url = '/products/' + productType
    window.open(url);
}

function searchProductsById(id) {
    url = '/product/' + id
    window.location.replace(url);
}

function searchProductsByCategory(category) {
    url = '/products/category/' + category
    console.log(url)
    window.location.replace(url);
}