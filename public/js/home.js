function searchProducts() {
    url = '/products/' + document.getElementById("search").value
    window.open(url, '_blank');
}

function searchProductsbyType(productType) {
    url = '/products/' + productType
    window.open(url);
}

function searchProductsById(id) {
    console.log('entrou em js searchProductsById')
    url = '/product/' + id
    window.location.replace(url);
}

function searchProductsByFilter(param, value) {
    console.log('entrou em js searchProductsByFilter')
    url = '/products/' + param + '/' + value
    window.location.replace(url);
}