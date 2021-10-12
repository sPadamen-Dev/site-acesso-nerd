window.addEventListener('load', function () {

 const boxSizes = document.getElementsByClassName('size-available');

    for (var i=0; i<boxSizes.length; i++) { 
        const myElem = document.getElementById(boxSizes[i].id)
        myElem.addEventListener('click', event => {
            /* Remove class from any size selected */
            let selectedSize = document.getElementsByClassName('selected-size');
            
            for (var i=0; i< selectedSize.length; i++) {
                let elemSelected = document.getElementById(selectedSize[i].id)
                elemSelected.classList.remove('selected-size')
            }

            /*Add class for the last size selected */
            event.target.classList.add('selected-size')
            
            const elemId = event.target.id;
            const sizeSelected = document.getElementById(elemId).getAttribute('value');
            alert(sizeSelected)
            document.getElementById('choosen-size').setAttribute('value', elemToBeSelected.value )
        })
      }
})
