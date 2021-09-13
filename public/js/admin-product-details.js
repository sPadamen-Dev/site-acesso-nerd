let numberOfPics = 0;
let numberOfPicsToBeLoaded = 4;

function getNumberOfPics() {
    numberOfPics = document.getElementById('pdp-images').childElementCount;
    numberOfPicsToBeLoaded -= numberOfPics;
    console.log('number of pics: ', numberOfPics, ' you can load more: ', numberOfPicsToBeLoaded)
}

function getNumberOfPicsToBeLoaded() {
    console.log('you can upload ', numberOfPicsToBeLoaded, ' pics')
}

function getName(fullPath) {
    var index = fullPath.lastIndexOf("/");
    var filename = fullPath;
    if(index !== -1) {     
        filename = fullPath.substring(index+1,fullPath.length);
    }
    return filename;
}


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
}

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
}

/* Loading main pic when thumbnail is selected */
const divs = document.querySelectorAll('.pdp-grp-images');
divs.forEach(el => el.addEventListener('click', event => {
    if (!(el.style.display == 'none')) {
        loadMainPic(event.target.id)
    }
}));

/* Deleting Pic */
function deleteAdminProductPic(id) {

    let parentElementToBeDeleted = document.getElementById(id).parentElement;   
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
}


/* Controlling images update */
const picInput = document.getElementById('pdp-inp-pics');

// Listen for files selection
picInput.addEventListener('change', (e) => {
    // Retrieve all files
    const files = picInput.files;

    let numberOfLoadedPics = 4 - numberOfPicsToBeLoaded ;

    // Check files count
    if (numberOfPicsToBeLoaded == 0) {
        alert(`Limite de fotos excedido. O produto já possui o máximo de fotos permitidas: 4 fotos.`)
        return;
    }

    if (files.length > numberOfPicsToBeLoaded) {
        alert(`Limite de fotos excedido. Tente novamente selecionando apenas ${numberOfPicsToBeLoaded} foto(s).`)
    }

    // TODO: continue uploading on server
});

getNumberOfPics();





