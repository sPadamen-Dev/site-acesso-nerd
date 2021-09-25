const chooseFile = document.getElementById('admin-inp-pic');
const imgPreview = document.getElementById('pdp-grp-main-image');

chooseFile.addEventListener("change", function () {
    getImgData();
  });

  function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });    
    }
  }

  /*Loading product status on switch*/
document.querySelector('#admin-status-switch').addEventListener('change', (evento)=>{
  if (document.getElementById('admin-status-switch').checked) {
      document.getElementById('admin-status').innerText = "Ativo"
      document.getElementById('admin-status-value').setAttribute('value', 'A')
  } else {
      document.getElementById('admin-status').innerText = "Inativo"
      document.getElementById('admin-status-value').setAttribute('value', 'I')
  }
});

document.getElementById("btn-admin-edit").addEventListener("click", function(event){
  
  event.preventDefault()

  document.getElementById('btn-admin-edit').toggleAttribute('hidden');
  document.getElementById('admin-inp-pic').toggleAttribute('disabled');
  document.getElementById('btn-admin-cancel').toggleAttribute('hidden');
  document.getElementById('admin-status-switch').toggleAttribute('disabled');
  document.getElementById('pdp-inp-user').toggleAttribute('readOnly');
  document.getElementById('pdp-inp-name').toggleAttribute('readOnly');
  document.getElementById('pdp-inp-cpf').toggleAttribute('readOnly');
  document.getElementById('pdp-inp-email').toggleAttribute('readOnly');
  document.getElementById('btn-admin-save').toggleAttribute('disabled');
  document.getElementById('btn-admin-delete').toggleAttribute('disabled');
});