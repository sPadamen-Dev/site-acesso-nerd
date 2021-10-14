document.getElementById("btn-admin-edit").addEventListener("click", function(event){
  
  event.preventDefault()

  document.getElementById('btn-admin-edit').toggleAttribute('hidden');
  document.getElementById('admin-inp-pic').toggleAttribute('disabled');
  document.getElementById('btn-admin-cancel').toggleAttribute('hidden');
  document.getElementById('admin-status-switch').toggleAttribute('disabled');
  document.getElementById('admin-inp-user').toggleAttribute('readOnly');
  document.getElementById('admin-inp-name').toggleAttribute('readOnly');
  document.getElementById('admin-inp-cpf').toggleAttribute('readOnly');
  document.getElementById('admin-inp-email').toggleAttribute('readOnly');
  document.getElementById('btn-admin-save').toggleAttribute('disabled');
  document.getElementById('admin-delete').toggleAttribute('disabled');
});


document.getElementById('admin-delete').addEventListener("click", function(event){
  
  event.preventDefault()

});

function removeMainPic(img) {
  document.getElementById("admin-main-pic").src ="/img/profiles/placeHolderProfileImage.jpg";
  document.getElementById("admin-deleted-img").value='S';
}