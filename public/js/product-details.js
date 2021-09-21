function loadProductMainPic( image ) {
    let mainPic = document.getElementById('pd-main-pic');
    mainPic.src = image;
}

function selectProductPic(image, id) {

    let picSelectedId = document.querySelector('.pd-pic-selected');
    picSelectedId.classList.remove('pd-pic-selected');

    let imgToBeSelected = document.getElementById(id);
    imgToBeSelected.classList.add('pd-pic-selected');

    loadProductMainPic(image);
}

