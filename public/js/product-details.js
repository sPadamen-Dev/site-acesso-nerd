window.addEventListener('load', function () {

 const boxSizes = document.getElementsByClassName('size-available');

    for (var i=0; i<boxSizes.length; i++) { 
        const myElem = document.getElementById(boxSizes[i].id)
        
        myElem.addEventListener('click', event => {

            let choosenSize = document.getElementById('choosen-size')

            /* Remove class from any size selected */
            let selectedSize = document.getElementsByClassName('selected-size');
            
            for (var i=0; i< selectedSize.length; i++) {
                let elemSelected = document.getElementById(selectedSize[i].id)
                elemSelected.classList.remove('selected-size')
            }
            /* Clear choosen size */
            choosenSize.setAttribute('value', '')

            /*Add class for the last size selected */
            event.target.classList.add('selected-size')
            
            const elemId = event.target.id;
            const sizeSelected = document.getElementById(elemId).getAttribute('value');
            alert(sizeSelected)
            /* Add size selected to input form */
            choosenSize.setAttribute('value', elemToBeSelected.value )
        })
      }
})
