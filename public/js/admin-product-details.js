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


/* Loading main Pic as first thumbnail image on load and adding select style */
document.getElementById('pdp-img-0').addEventListener('load', (evento)=>{
    let mainPicElem = document.getElementById('pdp-main-pic');
    let firstThumbPic = document.getElementById('pdp-img-0');
    firstThumbPic.classList.add('pdp-pic-selected');
    mainPicElem.src = firstThumbPic.getAttribute("src");
});

/* Loading main pic when thumbnail is selected */
document.querySelectorAll('.pdp-grp-images').addEventListener('', (evento)=> {
    const divs = document.querySelectorAll('.pdp-grp-images');

    divs.forEach(el => el.addEventListener('click', event => {
        let img = (event.target.getAttribute("src"));
        let mainPic = document.getElementById('pdp-main-pic');
        mainPic.src = img;
    }));
});



/* Deleting Pic */
function deleteAdminProductPic(id) {
    let list = document.querySelectorAll('img.pdp-product-pics');

    list.forEach( item => {
        console.log(getName(item.src))
    }
        
      );

    document.getElementById(id).parentElement.style.display = 'none';
}

