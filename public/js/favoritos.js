const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
favoritos.forEach(function(favorito) {
    document.getElementById(favorito).className = 'fav';
})
document.querySelector('.like').addEventListener('click', function(e) {
    var id = e.target.id,
        item = e.target,
        index = favoritos.indexOf(id);
    if (!id) return;
    if (index === -1) {
        favoritos.push(id);
        item.className = 'fav';
    } else {
        favoritos.splice(index, 1);
        item.className = '';
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
});