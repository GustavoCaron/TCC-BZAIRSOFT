// ADICIONAR BORDA AO CONTEUDO SELECIONADO NO MENU

const menu = document.querySelectorAll('.lista-cabecalho')
const secoes = document.querySelectorAll('section')

menu.forEach((botoes) => {
    botoes.addEventListener('click', () => {
        removerClasseSelecionado()
        adicionarClasseSelecionado(botoes)
        aparecerSecao(menu)
    })
})

// function aparecerSecao(menu){
//     menu.forEach((secoes, index) => {
//         if(menu[index].classList.contains('selecionar')){
//             secoes[]
//         }
//     })
// }

function adicionarClasseSelecionado(botoes){
    botoes.classList.add('selecionar')
}

function removerClasseSelecionado(){
    menu.forEach(botoes => {
        if(botoes.classList.contains('selecionar')){
            botoes.classList.remove('selecionar')
        }
    })
}