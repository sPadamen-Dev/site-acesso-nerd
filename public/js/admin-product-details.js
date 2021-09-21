let numberOfPics = 0;
let numberOfPicsToBeLoaded = 4;
/*const productsController = require('../../src/controllers/products.controller')*/

function getNumberOfPics() {
    numberOfPics = document.getElementById('pdp-images').childElementCount;
    numberOfPicsToBeLoaded -= numberOfPics;
    console.log('number of pics: ', numberOfPics, ' you can load more: ', numberOfPicsToBeLoaded)
}

/*
function getName(fullPath) {
    var index = fullPath.lastIndexOf("/");
    var filename = fullPath;
    if(index !== -1) {     
        filename = fullPath.substring(index+1,fullPath.length);
    }
    return filename;
}*/

/*Loading product status on switch*/
document.querySelector('#pdp-inp-switch').addEventListener('change', (evento)=>{
    if (document.getElementById('pdp-inp-switch').checked) {
        document.getElementById('pdp-p-status').innerText = "Ativo"
    } else {
        document.getElementById('pdp-p-status').innerText = "Inativo"
    }
});

/* Selection class on product images */
function selectAdminProductPic(id) {
    let picSelectedId = document.querySelector('.pdp-pic-selected');
    picSelectedId.classList.remove('pdp-pic-selected');

    let imgToBeSelected = document.getElementById(id);
    imgToBeSelected.classList.add('pdp-pic-selected');
};

function loadMainPic(id) {
    selectAdminProductPic(id);
    console.log(id);
    let mainPicElem = document.getElementById('pdp-main-pic');
    let firstThumbPic = document.getElementById(id);
    /*firstThumbPic.classList.add('pdp-pic-selected');*/
    mainPicElem.src = firstThumbPic.getAttribute("src");
};

function loadDefaultMainPic() {
    let mainPicElem = document.getElementById('pdp-main-pic');
    mainPicElem.src = "/img/placeHolderProductImage.jpg";
};

/* Loading main pic when thumbnail is selected */
const divs = document.querySelectorAll('.pdp-grp-images');
divs.forEach(el => el.addEventListener('click', event => {
    if (!(el.style.display == 'none')) {
        loadMainPic(event.target.id)
    }
}));

/* Deleting Pic */

function deleteAdminProductPic(elId) {

    let parentElementToBeDeleted = document.getElementById(elId).parentElement;   
    parentElementToBeDeleted.style.display = 'none';

    console.log('ChildElement: ', parentElementToBeDeleted.lastElementChild.getAttribute('src'));

    let list = document.querySelectorAll('img.pdp-product-pics');
    let elementsIds = [];
    list.forEach( item => {
        elementsIds.push(item.id);
    });

    let picFound = false;

    let selectedParentElement = document.getElementById(document.querySelector('.pdp-pic-selected').id).parentElement;
    if(selectedParentElement.id == parentElementToBeDeleted.id) {
        elementsIds.some(elementId => {
            let elem = document.getElementById(elementId);
            if(!(elem.parentElement.style.display)) {
                loadMainPic(elem.id)
                picFound = true;
                return true;
            }
        })
    } else {
        picFound = true;
    }

    if (!picFound) {
        loadDefaultMainPic();
    }
    numberOfPicsToBeLoaded ++;
    console.log('number of to be loaded: ', numberOfPicsToBeLoaded)
    
};

function persistDeletedPics() {
    console.log('Chamou persistDeletedPics')
    let list = document.querySelectorAll('img.pdp-product-pics');
    let deletedPicsList = new Array(4);
    let elementsIds = [];
    list.forEach( item => {
        elementsIds.push(item.id);
    })

    elementsIds.some(elementId => {
        let elem = document.getElementById(elementId);
        if(!(elem.parentElement.style.display)) {
            deletedPicsList.push(elem.id)
        }
    })

    console.log('pictures to be deleted (ids): ', deletedPicsList)

    /*if (deletedPicsList.length > 0) {
        productsController.deletePicById(deletedPicsList)
    } else {
        console.log('There is no pic to delete from DB')
    }*/

    if (deletedPicsList.length > 0) {
        $.ajax({
            url: '../../src/controllers/products.controller.js/deletePicById',
            type: 'POST',
            data: deletedPicsList,
            dataType:'JSON',
            success: function(result){
            console.log(result);
            }
        });
    } else {
        console.log('There is no pic to delete from DB')
    }

}

/* Controlling number of images to upload */
const picInput = document.getElementById('pdp-inp-pics');

// Listen for files selection
picInput.addEventListener('change', (e) => {
    // Retrieve all files
    const files = picInput.files;

    // Check files count
    if (numberOfPicsToBeLoaded == 0) {
        alert(`Limite de fotos excedido. O produto já possui o máximo de fotos permitidas: 4 fotos.`)
        return;
    }

    if (files.length > numberOfPicsToBeLoaded) {
        alert(`Limite de fotos excedido (4 fotos por produto). Tente novamente selecionando apenas ${numberOfPicsToBeLoaded} foto(s).`)
    }

    // TODO: continue uploading on server
});

getNumberOfPics();





