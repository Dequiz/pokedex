function abrirPokedex(){
        let pokedex = document.querySelector('.pokedex')
       
        pokedex.style.position = 'relative'
        pokedex.style.left = '300px' 
        pokedex.style.transition = 'ease-in-out 5s all'
       
}
let triangulo = document.querySelector('.trianguloPorta')
triangulo.addEventListener('mouseover', abrirPokedex)