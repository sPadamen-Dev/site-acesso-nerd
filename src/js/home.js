function searchProducts() {
    url = '/products/' + document.getElementById("search").value
    window.open(url, '_blank');
}

function searchProductsbyType(productType) {
    url = '/products/' + productType
    window.open(url);
}

function searchProductsByFilter(param, value) {
    url = '/products/' + param + '/' + value
    window.location.replace(url);
}