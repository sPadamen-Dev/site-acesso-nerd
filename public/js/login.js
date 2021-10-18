// Efeito para sumir o texto do botão, 
// passando a ideia de que o Click funcionou

document.querySelector('#botao').addEventListener('click', (evento)=>{
  document.querySelector('#botao').textContent =" "
  setTimeout(function(){document.querySelector('#botao').textContent = 'Embarcar'; }, 100);
});

// Configurando eventos no input senha

let showHidePass = function (evento){
if (document.getElementById('senha').type == 'password'){
    document.getElementById('senha').type = 'text';
    document.getElementById('olho').setAttribute('class','fa fa-eye');
  }
  else if (document.getElementById('senha').type == 'text') {
    document.getElementById('senha').type = 'password';
    document.getElementById('olho').setAttribute('class','fa fa-eye-slash');
  };
}

// permitindo ver a senha com click
document.querySelector('#olho').addEventListener('click', showHidePass, false)
// permitindo ver a senha com touch
document.querySelector('#olho').addEventListener('touch', showHidePass, false)

// Configurando eventos no input confirma-senha

let showHideConfirmPass = function (evento){
if (document.getElementById('confirm-senha').type == 'password'){
    document.getElementById('confirm-senha').type = 'text';
    document.getElementById('confirm-olho').setAttribute('class','fa fa-eye');
  }
  else if (document.getElementById('confirm-senha').type == 'text') {
    document.getElementById('confirm-senha').type = 'password';
    document.getElementById('confirm-olho').setAttribute('class','fa fa-eye-slash');
  };
}
/*
// permitindo ver a senha com click
document.querySelector('#confirm-olho').addEventListener('click', showHideConfirmPass, false)

// permitindo ver a senha com touch
document.querySelector('#confirm-olho').addEventListener('touch', showHideConfirmPass, false)
*/