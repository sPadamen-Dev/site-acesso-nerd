// Efeito para sumir o texto do botão, 
// passando a ideia de que o Click funcionou

document.querySelector('#botao').addEventListener('click', (evento)=>{
    document.querySelector('#botao').textContent =" "
    setTimeout(function(){document.querySelector('#botao').textContent = 'Embarcar'; }, 100);
});

// permitindo ver a senha com o mouse

document.querySelector('#olho').addEventListener('click', (evento)=>{
    if (document.getElementById('senha').type == 'password'){
        document.getElementById('senha').type = 'text';
        document.getElementById('olho').setAttribute('class','fa fa-eye-slash');
      }
      else if (document.getElementById('senha').type == 'text') {
        document.getElementById('senha').type = 'password';
        document.getElementById('olho').setAttribute('class','fa fa-eye');
      };
})

// permitindo ver a senha com o mouse
document.querySelector('#olho').addEventListener('touch', (evento)=>{
    if (document.getElementById('senha').type == 'password'){
        document.getElementById('senha').type = 'text';
        document.getElementById('olho').setAttribute('class','fa fa-eye-slash');
      }
      else if (document.getElementById('senha').type == 'text') {
        document.getElementById('senha').type = 'password';
        document.getElementById('olho').setAttribute('class','fa fa-eye');
      };
})

