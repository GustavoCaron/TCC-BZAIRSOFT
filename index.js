let menu = document.getElementsByClassName('lista-cabecalho')
console.log(menu)

// menu.addEventListener('click', () => {
//     alert('clicou')
// })
    
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', () => {
        menu[i].classList.add('selecionado')
    });
}
