const chooseFile = document.getElementById('prod-inp-pic');

const imgPreview = document.getElementById('prod-main-pic');

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

/*Loading product status on switch*/
document.querySelector('#prod-status-switch').addEventListener('change', (evento)=>{
  if (document.getElementById('prod-status-switch').checked) {
      document.getElementById('prod-status').innerText = "Ativo"
      document.getElementById('prod-status-value').setAttribute('value', 'A')
  } else {
      document.getElementById('prod-status').innerText = "Inativo"
      document.getElementById('prod-status-value').setAttribute('value', 'I')
  }
});