const chooseFile = document.getElementById('admin-inp-pic');
/*const imgPreview = document.getElementById('pdp-grp-main-image');*/
const imgPreview = document.getElementById('admin-main-pic');

chooseFile.addEventListener("change", function () {
    getImgData();
  });

  function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
       /* imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';*/
        imgPreview.setAttribute('src', this.result)
      });    
    }
  }

  /*Loading admin status on switch*/
document.querySelector('#admin-status-switch').addEventListener('change', (evento)=>{
  if (document.getElementById('admin-status-switch').checked) {
      document.getElementById('admin-status').innerText = "Ativo"
      document.getElementById('admin-status-value').setAttribute('value', 'A')
  } else {
      document.getElementById('admin-status').innerText = "Inativo"
      document.getElementById('admin-status-value').setAttribute('value', 'I')
  }
});