function abrirPokedex(){
        let pokedex = document.querySelector('.pokedex')
       
        pokedex.style.position = 'relative'
        pokedex.style.left = '200px' 
        pokedex.style.transition = 'ease-in-out 5s all'
       
}
window.onload = abrirPokedex