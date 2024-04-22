let triangulo = document.querySelector('.trianguloPorta')
let txt = document.querySelector('.texto')
let fundoTxt = document.querySelector('.fundoTexto')
let nomePokemon = document.querySelector('.nomePokemon')

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
    nomePokemon.innerHTML = ''
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
   
    let aleatorizarPokemon = Math.floor(Math.random() * 20) + 1
    let pokemonAparecer = `<img src='pokemon-number${aleatorizarPokemon}.png' class='pokemon-text${aleatorizarPokemon}'>`
    tela.innerHTML = pokemonAparecer
    if(aleatorizarPokemon === 1){
      nomePokemon.innerHTML = 'Bulbassauro'
      txt.innerHTML = 'Este é bulbassauro'
    }else if(aleatorizarPokemon === 2){
        nomePokemon.innerHTML = 'Ivyssauro'
        txt.innerHTML = 'Este é ivysauro'
    }else if(aleatorizarPokemon === 3){
        nomePokemon.innerHTML = 'Venusauro'
        txt.innerHTML = 'Este é venusauro'
    }else if(aleatorizarPokemon === 4){
        nomePokemon.innerHTML = 'Charmander'
        txt.innerHTML = 'Este é charmander'
    }else if(aleatorizarPokemon === 5){
        nomePokemon.innerHTML = 'Charmeleon'
        txt.innerHTML = 'Este é charmeleon'
    }else if(aleatorizarPokemon === 6){
        nomePokemon.innerHTML = 'Charizard'
        txt.innerHTML = 'Este é charizard'
    }else if(aleatorizarPokemon === 7){
        nomePokemon.innerHTML = 'Squirtle'
        txt.innerHTML = 'Este é squirtle'
    }else if(aleatorizarPokemon === 8){
        nomePokemon.innerHTML = 'Wartortle'
        txt.innerHTML = 'Este é wartortle'
    }else if(aleatorizarPokemon === 9){
        nomePokemon.innerHTML = 'Blastoise'
        txt.innerHTML = 'Este é blastoise'
    }else if(aleatorizarPokemon === 10){
        nomePokemon.innerHTML = 'Caterpie'
        txt.innerHTML = 'Este é caterpie'
    }else if(aleatorizarPokemon === 11){
        nomePokemon.innerHTML = 'Metapod'
        txt.innerHTML = 'Este é metapod'
    }else if(aleatorizarPokemon === 12){
        nomePokemon.innerHTML = 'Butterfree'
        txt.innerHTML = 'Este é butterfree'
    }else if(aleatorizarPokemon === 13){
        nomePokemon.innerHTML = 'Weedle'
        txt.innerHTML = 'Este é weedle'
    }else if(aleatorizarPokemon === 14){
        nomePokemon.innerHTML = 'Kakuna'
        txt.innerHTML = 'Este é kakuna'
    }else if(aleatorizarPokemon === 15){
        nomePokemon.innerHTML = 'Beedril'
        txt.innerHTML = 'Este é beedril'
    }else if(aleatorizarPokemon === 16){
        nomePokemon.innerHTML = 'Pidgey'
        txt.innerHTML = 'Este é pidgey'
    }else if(aleatorizarPokemon === 17){
        nomePokemon.innerHTML = 'Pidgeotto'
        txt.innerHTML = 'Este é pidgeotto'
    }else if(aleatorizarPokemon === 18){
        nomePokemon.innerHTML = 'Pidgeot'
        txt.innerHTML = 'Este é pidgeot'
    }else if(aleatorizarPokemon === 19){
        nomePokemon.innerHTML = 'Ratata'
        txt.innerHTML = 'Este é ratata'
    }else if(aleatorizarPokemon === 20){
        nomePokemon.innerHTML = 'Raticate'
        txt.innerHTML = 'Este é raticate'
    }
}
triangulo.addEventListener('mouseover', function() {
    if (triangulo.className === 'trianguloPorta') {
        abrirPokedex();
    } else if (triangulo.className === 'trianguloFechar') {
        fecharPokedex();
    }
});
