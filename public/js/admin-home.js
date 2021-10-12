function selectMenu(panel) {
    alert(panel)
    document.getElementsByClassName('selected-menu').classList.remove('selected-menu')

    if(panel ==='products' || panel === 'product-details' || panel === 'product-create') {
        const prodMenu = document.getElementById('product-menu')
        alert(prodMenu)
        prodMenu.classList.add('selected-menu')
    } else if (panel ==='administrators' || panel === 'administrator-details' || panel === 'administrator-create') {
        const adminMenu = document.getElementById('product-menu')
        alert(adminMenu)
        adminMenu.classList.add('selected-menu')
    }
}