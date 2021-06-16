function likeIt(element) {
    var v = document.getElementById(element);
    if (v.classList.contains("liked")) {
        v.classList.remove("liked")
    } else {
        v.classList.add("liked")
    }
}

function addToBag(element) {
    var v = document.getElementById(element);
    if (v.classList.contains("addedToBag")) {
        v.classList.remove("addedToBag")
    } else {
        v.classList.add("addedToBag")
    }
}

function showProductDetails(productId) {
    hide(document.getElementsByClassName('banners-container'));
    url = '/products/product/' + productId
    window.location.replace(url);
}
