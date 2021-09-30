/*Loading product status on switch*/
document.querySelector('#prod-status-switch').addEventListener('change', (evento)=>{
    if (document.getElementById('prod-status-switch').checked) {
        document.getElementById('prod-status').innerText = "Ativo"
    } else {
        document.getElementById('prod-status').innerText = "Inativo"
    }
});

const prodImg0 = document.getElementById('pdp-img-0')

prodImg0.addEventListener('load', event =>{
    event.target.classList.add('pdp-pic-selected')

    const img = event.target.getAttribute('src')
    document.getElementById('prod-main-pic').setAttribute('src', img)
})

const prodImgs = document.querySelectorAll('.pdp-product-pics')

prodImgs.forEach(el => el.addEventListener('click', event => {
    const prodSelected = document.querySelector('.pdp-pic-selected')
    if (prodSelected) {
        prodSelected.classList.remove('pdp-pic-selected')
    }
    el.classList.add('pdp-pic-selected')
    const img = event.target.getAttribute('src')
    document.getElementById('prod-main-pic').setAttribute('src', img)
}));


const idsImgs = document.querySelectorAll('.pdp-img-del')

idsImgs.forEach(el => el.addEventListener('click', event => {
    const elemIndex = el.getAttribute('value')
    alert(elemIndex)
    
    const elemId = 'pdp-id-image' + elemIndex
    const deletedImgId = document.getElementById(elemId).getAttribute('value')
    const deletedImgInp = document.getElementById('deleted-prod-imgs')

    deletedImgInp.value += deletedImgId

    /* TO DO - Identificar se o element a ser deletado está selecionado.
    Caso esteja, atualizar a imagem principal */
    event.target.toggleAttribute('hidden')
    const idToRemove = 'pdp-div-image' + elemIndex
    const elem = document.getElementById(idToRemove);
    elem.toggleAttribute('hidden')
    /*elem.parentNode.removeChild(elem);*/
}))