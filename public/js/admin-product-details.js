document.getElementById("btn-prod-edit").addEventListener("click", function(event){
  
    event.preventDefault()
  
    document.getElementById('btn-prod-edit').toggleAttribute('hidden');
    document.getElementById('prod-inp-pic').toggleAttribute('disabled');
    document.getElementById('btn-prod-cancel').toggleAttribute('hidden');
    document.getElementById('prod-status-switch').toggleAttribute('disabled');
    document.getElementById('prod-ta-description').toggleAttribute('readOnly');
    document.getElementById('prod-inp-installmentParts').toggleAttribute('readOnly');
    document.getElementById('prod-inp-installmentPrice').toggleAttribute('readOnly');
    document.getElementById('prod-inp-atSightPrice').toggleAttribute('readOnly');
    document.getElementById('btn-prod-save').toggleAttribute('disabled');
    document.getElementById('prod-delete').toggleAttribute('disabled');
  });

document.getElementById('prod-delete').addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("prod-select-category").addEventListener("change", function(event){
    const valueSelected = document.getElementById('prod-select-category').value;
    document.getElementById('prod-inp-category').setAttribute('value', valueSelected);
});
  
function removeMainPic(img) {
    document.getElementById("prod-main-pic").src ="/img/products/placeHolderProductImage.jpg";
    document.getElementById("prod-deleted-img").value='S';
}
