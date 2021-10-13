

document.getElementById("btn-prod-edit").addEventListener("click", function(event){
  
    event.preventDefault()
  
    document.getElementById('btn-prod-edit').toggleAttribute('hidden');
    document.getElementById('prod-inp-pic').toggleAttribute('disabled');
    document.getElementById('btn-prod-cancel').toggleAttribute('hidden');
    document.getElementById('prod-status-switch').toggleAttribute('disabled');
    document.getElementById('pdp-inp-description').toggleAttribute('readOnly');
    document.getElementById('pdp-inp-installmentParts').toggleAttribute('readOnly');
    document.getElementById('pdp-inp-installmentPrice').toggleAttribute('readOnly');
    document.getElementById('pdp-inp-atSightPrice').toggleAttribute('readOnly');
    document.getElementById('btn-prod-save').toggleAttribute('disabled');
    document.getElementById('prod-delete').toggleAttribute('disabled');
  });


  document.getElementById("prod-select-category").addEventListener("change", function(event){
    const valueSelected = document.getElementById('prod-select-category').value;
    document.getElementById('pdp-inp-category').value = valueSelected;
});


/*

function loadCategory(category) {
    
    //Get select object
    var objSelect = document.getElementById("pdp-select-category");

    //Set selected
    setSelectedValue(objSelect, category);
}



function selectCategory() {
    const select = document.getElementById("pdp-select-category")
    var valueSelected = select.options[select.selectedIndex].value;
    document.getElementById('pdp-inp-category').value = valueSelected;
    alert('selecionou ', document.getElementById('pdp-inp-category').text )
}
*/