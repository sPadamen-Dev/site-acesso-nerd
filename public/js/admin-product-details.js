document.querySelector('#pdp-inp-switch').addEventListener('change', (evento)=>{
    if (document.getElementById('pdp-inp-switch').checked) {
        document.getElementById('pdp-p-status').innerText = "Ativo"
    } else {
        document.getElementById('pdp-p-status').innerText = "Inativo"
    }
});

function loadProductMainPic( image ) {
    let mainPic = document.getElementById('pdp-main-pic');
    mainPic.src = image;
}

function selectAdminProductPic(image, id) {
    let picSelectedId = document.querySelector('.pdp-pic-selected');
    picSelectedId.classList.remove('pdp-pic-selected');

    let imgToBeSelected = document.getElementById(id);
    imgToBeSelected.classList.add('pdp-pic-selected');
    
    loadProductMainPic(image)
}