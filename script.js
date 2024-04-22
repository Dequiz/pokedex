let triangulo = document.querySelector('.trianguloPorta')
let txt = document.querySelector('.texto')

function abrirPokedex() {
    let pokedex = document.querySelector('.pokedex')
    pokedex.style.position = 'relative'
    pokedex.style.left = '322px' 
    pokedex.style.transition = 'ease-in-out 1.5s all'
    triangulo.style.borderRight = '25px solid rgb(255,251,0)'
    triangulo.style.borderLeft = '0'
    triangulo.setAttribute('class', 'trianguloFechar')
    setTimeout(ligarTela, 2000) 
    setTimeout(trocaDePokemon,2000)
}

function fecharPokedex() {
    let pokedex = document.querySelector('.pokedex')
    pokedex.style.position = 'relative'
    pokedex.style.left = '0px' 
    pokedex.style.transition = 'ease-in-out 1.5s all'
    triangulo.style.borderRight = '0'
    triangulo.style.borderLeft = '25px solid rgb(255,251,0)'
    triangulo.setAttribute('class', 'trianguloPorta')
    setTimeout(desligarTela,500)
    txt.innerHTML = ''
}
function ligarTela(){
    let tela = document.querySelector('.tela')
    tela.style.backgroundColor = '#B7D5E5'    
}
function desligarTela(){
    let tela = document.querySelector('.tela')
    tela.style.backgroundColor = '#000000'
    tela.innerHTML = `<img src='fundoPreto.png'> `
}
function trocaDePokemon(){
    let tela = document.querySelector('.tela')
   
    let aleatorizarPokemon = Math.floor(Math.random() * 2) + 1
    let pokemonAparecer = `<img src='pokemon-number${aleatorizarPokemon}.png' class='pokemon-text${aleatorizarPokemon}'>`
    tela.innerHTML = pokemonAparecer
    if(aleatorizarPokemon === 1){
      txt.innerHTML = 'Esse pokemon é incrivel e é de planta'
    }else if(aleatorizarPokemon === 2){
        txt.innerHTML = 'Esse pokemon é mais incrivel que o outro pois é sua evolução'
    }
}
triangulo.addEventListener('mouseover', function() {
    if (triangulo.className === 'trianguloPorta') {
        abrirPokedex();
    } else if (triangulo.className === 'trianguloFechar') {
        fecharPokedex();
    }
});
