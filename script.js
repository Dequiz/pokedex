let triangulo = document.querySelector('.trianguloPorta')
let txt = document.querySelector('.texto')
let fundoTxt = document.querySelector('.fundoTexto')
let nomePokemon = document.querySelector('.nomePokemon')

//TIPOS DE POKEMON//
let tipos = document.querySelector('.tipos')
let poison = `<p class = 'poison'>Venenoso</p>`
let fire = `<p class = 'fire'>Fogo</p>`
let water = `<p class = 'water'>Água</p>`
let grass = `<p class = 'grass'>Grama</p>`
let ice = `<p class = 'ice'>Gelo</p>`
let dragon = `<p class = 'dragon'>Dragão</p>`
let flying = `<p class = 'flying'>Voador</p>`
let steel = `<p class = 'steel'>Aço</p>`
let normal = `<p class = 'normal'>Normal</p>`
let dark = `<p class = 'dark'>Noturno</p>`
let ghost = `<p class = 'ghost'>Fantasma</p>`
let fighting = `<p class = 'fighting'>Lutador</p>`
let eletric = `<p class = 'eletric'>Elétrico</p>`
let bug = `<p class = 'bug'>Inseto</p>`
let ground = `<p class = 'ground'>Terrestre</p>`
let rock = `<p class = 'rock'>Pedra</p>`
let psychic = `<p class = 'psychic'>Psiquico</p>`
let fairy = `<p class = 'fairy'>Fada</p>`



//-------------------//
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
    tipos.innerHTML = ''
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
    let aleatorizarPokemon = Math.floor(Math.random() * 151) + 1
    let pokemonAparecer = `<img src='pokemon-number${aleatorizarPokemon}.png' class='pokemon-text${aleatorizarPokemon}'>`
    tela.innerHTML = pokemonAparecer
    if(aleatorizarPokemon === 1){
      nomePokemon.innerHTML = 'Bulbassauro'
      txt.innerHTML = 'Um Pokémon de Grama e Veneno com uma semente em suas costas que cresce à medida que ele evolui. Bulbasaur é calmo e amigável, usando sua energia solar para fortalecer seus ataques.'
      tipos.innerHTML = grass + poison
    }else if(aleatorizarPokemon === 2){
        nomePokemon.innerHTML = 'Ivyssauro'
        txt.innerHTML = 'A evolução de Bulbasaur, Ivysaur é mais resistente e pode controlar plantas com seu bulbo nas costas, usando vinhas e pólen em batalha.'
        tipos.innerHTML = grass + poison
    }else if(aleatorizarPokemon === 3){
        nomePokemon.innerHTML = 'Venusauro'
        txt.innerHTML = 'A forma final de Bulbasaur, Venusaur é um gigante imponente com uma flor em suas costas que libera poderosos ataques de Grama.'
        tipos.innerHTML = poison + grass
    }else if(aleatorizarPokemon === 4){
        nomePokemon.innerHTML = 'Charmander'
        txt.innerHTML = 'Um pequeno Pokémon de Fogo com uma chama em sua cauda, Charmander busca constantemente fortalecer-se até tornar-se um poderoso Charizard, lançando chamas em seus oponentes.'
        tipos.innerHTML = fire
    }else if(aleatorizarPokemon === 5){
        nomePokemon.innerHTML = 'Charmeleon'
        txt.innerHTML = 'A evolução de Charmander, Charmeleon é temperamental e torna-se mais poderoso com a idade, lançando chamas intensas e rugindo em desafio.'
        tipos.innerHTML = fire
    }else if(aleatorizarPokemon === 6){
        nomePokemon.innerHTML = 'Charizard'
        txt.innerHTML = 'Um dragão poderoso do tipo Fogo e Voador, Charizard é conhecido por sua ferocidade em batalha e habilidades voadoras, lançando chamas e causando destruição.'
        tipos.innerHTML = fire + flying
    }else if(aleatorizarPokemon === 7){
        nomePokemon.innerHTML = 'Squirtle'
        txt.innerHTML = `Um Pokémon de Água com uma concha em suas costas, Squirtle é um iniciante popular e evolui para se tornar um poderoso Blastoise, lançando jatos d'água com precisão.`
        tipos.innerHTML = water
    }else if(aleatorizarPokemon === 8){
        nomePokemon.innerHTML = 'Wartortle'
        txt.innerHTML = 'A evolução de Squirtle, Wartortle é ágil e usa sua cauda para nadar rapidamente, preparando-se para se tornar um Blastoise, lançando poderosos jatos de água.'
        tipos.innerHTML = water
    }else if(aleatorizarPokemon === 9){
        nomePokemon.innerHTML = 'Blastoise'
        txt.innerHTML = ' O final de Squirtle, Blastoise é um tanque de guerra aquático com poderosos canhões de água em suas costas, causando devastação em seus inimigos.'
        tipos.innerHTML = water
    }else if(aleatorizarPokemon === 10){
        nomePokemon.innerHTML = 'Caterpie'
        txt.innerHTML = ' Um pequeno Pokémon Inseto com habilidades defensivas limitadas, Caterpie evolui para se tornar um Butterfree, lançando pó venenoso de suas asas.'
        tipos.innerHTML = bug
    }else if(aleatorizarPokemon === 11){
        nomePokemon.innerHTML = 'Metapod'
        txt.innerHTML = ' A forma intermediária de Caterpie, Metapod passa a maior parte do tempo endurecendo sua casca para se defender, esperando evoluir para se tornar um Butterfree.'
        tipos.innerHTML = bug
    }else if(aleatorizarPokemon === 12){
        nomePokemon.innerHTML = 'Butterfree'
        txt.innerHTML = 'A evolução de Caterpie, Butterfree é um Pokémon gracioso e voa elegantemente enquanto lança pó venenoso de suas asas, criando belos padrões no ar.'
        tipos.innerHTML = bug + flying
    }else if(aleatorizarPokemon === 13){
        nomePokemon.innerHTML = 'Weedle'
        txt.innerHTML = ' Um Pokémon Inseto e Veneno com um ferrão venenoso em sua cabeça, Weedle evolui para se tornar um Beedrill, atacando com ferocidade e rapidez.'
        tipos.innerHTML = bug + poison
    }else if(aleatorizarPokemon === 14){
        nomePokemon.innerHTML = 'Kakuna'
        txt.innerHTML = 'A forma intermediária de Weedle, Kakuna passa a maior parte do tempo imóvel enquanto endurece sua casca para se proteger, esperando evoluir para se tornar um Beedrill.'
        tipos.innerHTML = bug + poison
    }else if(aleatorizarPokemon === 15){
        nomePokemon.innerHTML = 'Beedril'
        txt.innerHTML = 'A evolução de Weedle, Beedrill é um Pokémon agressivo com ferrões venenosos em seus braços e poder de voo, atacando com precisão e velocidade.'
        tipos.innerHTML = bug + poison
    }else if(aleatorizarPokemon === 16){
        nomePokemon.innerHTML = 'Pidgey'
        txt.innerHTML = 'Um pequeno pássaro Normal e Voador, Pidgey voa graciosamente e evolui para se tornar um Pidgeot, atacando com suas afiadas garras e voando com agilidade.'
        tipos.innerHTML = flying + normal
    }else if(aleatorizarPokemon === 17){
        nomePokemon.innerHTML = 'Pidgeotto'
        txt.innerHTML = ' A evolução de Pidgey, Pidgeotto é maior e mais poderoso, capaz de voar mais rápido e atacar com suas afiadas garras, caçando presas habilmente.'
        tipos.innerHTML = flying + normal
    }else if(aleatorizarPokemon === 18){
        nomePokemon.innerHTML = 'Pidgeot'
        txt.innerHTML = 'O final de Pidgey, Pidgeot é um pássaro majestoso que pode voar incrivelmente rápido e lançar poderosos ataques de Voo, dominando os céus com sua presença.'
        tipos.innerHTML = flying + normal
    }else if(aleatorizarPokemon === 19){
        nomePokemon.innerHTML = 'Ratata'
        txt.innerHTML = 'Um Pokémon Normal com habilidades de mastigação afiadas e uma natureza curiosa, Rattata é comum em áreas urbanas, buscando alimento e explorando.'
        tipos.innerHTML = normal
    }else if(aleatorizarPokemon === 20){
        nomePokemon.innerHTML = 'Raticate'
        txt.innerHTML = ' A evolução de Rattata, Raticate é maior e mais feroz, muitas vezes usado para patrulhar e proteger seu território, atacando com mordidas poderosas.'
        tipos.innerHTML = normal
    }else if(aleatorizarPokemon === 21){
        nomePokemon.innerHTML = 'Spearow'
        txt.innerHTML = 'Um pássaro Normal e Voador conhecido por sua agressividade e por caçar em bandos, Spearow evolui para se tornar um Fearow, atacando com bicos afiados.'
        tipos.innerHTML = normal + flying
    }else if(aleatorizarPokemon === 22){
        nomePokemon.innerHTML = 'Fearow'
        txt.innerHTML = 'A evolução de Spearow, Fearow é um predador habilidoso que voa alto e ataca com seu bico afiado, dominando os céus com sua velocidade e agressão.'
        tipos.innerHTML = normal + flying
    }else if(aleatorizarPokemon === 23){
        nomePokemon.innerHTML = 'Ekans'
        txt.innerHTML = 'Um Pokémon Veneno conhecido por sua agilidade e habilidades de envenenamento, Ekans é encontrado frequentemente em áreas rurais, caçando suas presas sorrateiramente.'
        tipos.innerHTML = poison
    }else if(aleatorizarPokemon === 24){
        nomePokemon.innerHTML = 'Arbok'
        txt.innerHTML = 'A evolução de Ekans, Arbok é um Pokémon Veneno com um padrão intimidante em sua pele e uma capacidade de expelir veneno, defendendo-se com ferocidade.'
        tipos.innerHTML = poison
    }else if(aleatorizarPokemon === 25){
        nomePokemon.innerHTML = 'Pikachu'
        txt.innerHTML = 'O mascote mais reconhecível da série Pokémon, Pikachu é um Pokémon Elétrico adorado por sua fofura e poderosos ataques elétricos, como o famoso Thunderbolt.'
        tipos.innerHTML = eletric
    }else if(aleatorizarPokemon === 26){
        nomePokemon.innerHTML = 'Raichu'
        txt.innerHTML = 'A evolução de Pikachu, Raichu é maior e mais poderoso, capaz de gerar eletricidade em níveis ainda mais altos, lançando raios eletromagnéticos em seus inimigos.'
        tipos.innerHTML = eletric
    }else if(aleatorizarPokemon === 27){
        nomePokemon.innerHTML = 'Sandshrew'
        txt.innerHTML = 'Um Pokémon de Terra com uma pele dura que o protege do ambiente árido, Sandshrew evolui para se tornar um Sandslash, usando suas garras para cavar e atacar.'
        tipos.innerHTML = ground
    }else if(aleatorizarPokemon === 28){
        nomePokemon.innerHTML = 'Sandslash'
        txt.innerHTML = ' A evolução de Sandshrew, Sandslash é um Pokémon de Terra com garras afiadas e uma habilidade de rolar em uma bola para atacar, defendendo-se com habilidade e força.'
        tipos.innerHTML = ground
    }else if(aleatorizarPokemon === 29){
        nomePokemon.innerHTML = 'Nidoran♀'
        txt.innerHTML = 'Um Pokémon Veneno com um instinto protetor, Nidoran♀ evolui para se tornar uma Nidoqueen, defendendo seu território com ferocidade.'
        tipos.innerHTML = poison
    }else if(aleatorizarPokemon === 30){
        nomePokemon.innerHTML = 'Nidorina'
        txt.innerHTML = 'A evolução de Nidoran♀, Nidorina é cuidadosa e protetora, preparando-se para se tornar uma Nidoqueen, fortalecendo-se para proteger seus filhotes.'
        tipos.innerHTML = poison
    }else if(aleatorizarPokemon === 31){
        nomePokemon.innerHTML = 'Nidoqueen'
        txt.innerHTML = 'O final de Nidoran♀, Nidoqueen é uma força a ser reconhecida, com habilidades de luta e proteção impressionantes, liderando sua família com determinação.'
        tipos.innerHTML = poison + ground
    }else if(aleatorizarPokemon === 32){
        nomePokemon.innerHTML = 'Nidoran♂'
        txt.innerHTML = 'Um Pokémon Veneno conhecido por sua agressividade, Nidoran♂ evolui para se tornar um Nidoking, lutando por dominação e território.'
        tipos.innerHTML = poison
    }else if(aleatorizarPokemon === 33){
        nomePokemon.innerHTML = 'Nidorino'
        txt.innerHTML = 'A evolução de Nidoran♂, Nidorino é impetuoso e busca constantemente desafios, preparando-se para se tornar um Nidoking, lutando com fúria e determinação.'
        tipos.innerHTML = poison
    }else if(aleatorizarPokemon === 34){
        nomePokemon.innerHTML = 'Nidoking'
        txt.innerHTML = 'O final de Nidoran♂, Nidoking é um guerreiro formidável com força física e habilidades de veneno, dominando seus adversários com sua ferocidade.'
        tipos.innerHTML = poison + ground
    }else if(aleatorizarPokemon === 35){
        nomePokemon.innerHTML = 'Clefairy'
        txt.innerHTML = 'Um Pokémon Fada conhecido por sua doçura e habilidades de cura, Clefairy é uma adição valiosa a qualquer equipe, usando sua magia para proteger seus amigos.'
        tipos.innerHTML = fairy
    }else if(aleatorizarPokemon === 36){
        nomePokemon.innerHTML = 'Clefable'
        txt.innerHTML = 'A evolução de Clefairy, Clefable é mais raro e misterioso, com habilidades mágicas ainda mais poderosas, protegendo os segredos dos antigos contos de fadas.'
        tipos.innerHTML = fairy
    }else if(aleatorizarPokemon === 37){
        nomePokemon.innerHTML = 'Vulpix'
        txt.innerHTML = 'Um Pokémon de Fogo com uma cauda de chamas, Vulpix é cauteloso e usa suas habilidades de fogo para se defender, atacando com chamas e esperteza.'
        tipos.innerHTML = fire
    }else if(aleatorizarPokemon === 38){
        nomePokemon.innerHTML = 'Ninetales'
        txt.innerHTML = 'A evolução de Vulpix, Ninetales é majestoso e tem poderes místicos, capaz de lançar maldições e controlar o fogo, defendendo-se com magia ancestral.'
        tipos.innerHTML = fire
    }else if(aleatorizarPokemon === 39){
        nomePokemon.innerHTML = 'Jigglypuff'
        txt.innerHTML = 'Um Pokémon Normal e Fada conhecido por sua doçura e habilidades musicais, Jigglypuff adormece seus inimigos com seu canto, encantando a todos com sua música.'
        tipos.innerHTML = normal + fairy
    }else if(aleatorizarPokemon === 40){
        nomePokemon.innerHTML = 'Wigglytuff'
        txt.innerHTML = 'A evolução de Jigglypuff, Wigglytuff é mais robusto e poderoso, capaz de lançar poderosos ataques sonoros, protegendo seus entes queridos com sua força.'
        tipos.innerHTML = normal + fairy
    }else if(aleatorizarPokemon === 41){
        nomePokemon.innerHTML = 'Zubat'
        txt.innerHTML = ' Um Pokémon Veneno e Voador que vive em cavernas escuras, Zubat voa silenciosamente e ataca com seus fangos venenosos, navegando habilmente pelo escuro.'
        tipos.innerHTML = bug + flying
    }else if(aleatorizarPokemon === 42){
        nomePokemon.innerHTML = 'Golbat'
        txt.innerHTML = 'A evolução de Zubat, Golbat é maior e mais agressivo, atacando com uma ferocidade aprimorada e habilidades de voo, caçando suas presas com precisão.'
        tipos.innerHTML = bug + flying
    }else if(aleatorizarPokemon === 43){
        nomePokemon.innerHTML = 'Oddish'
        txt.innerHTML = 'Um Pokémon de Grama e Veneno com uma folha em sua cabeça, Oddish é comum em áreas arborizadas e evolui para se tornar um Gloom, absorvendo energia solar para crescer.'
        tipos.innerHTML = grass + poison
    }else if(aleatorizarPokemon === 44){
        nomePokemon.innerHTML = 'Gloom'
        txt.innerHTML = ' A evolução de Oddish, Gloom é conhecido por seu odor desagradável e habilidades venenosas, preparando-se para se tornar um Vileplume, espalhando toxinas pelo ar.'
        tipos.innerHTML = grass + poison
    }else if(aleatorizarPokemon === 45){
        nomePokemon.innerHTML = 'Vileplume'
        txt.innerHTML = ' O final de Oddish, Vileplume é uma planta venenosa poderosa com habilidades de controle mental e ataques de Grama, lançando pólen tóxico para derrotar seus inimigos.'
        tipos.innerHTML = grass + poison
    }else if(aleatorizarPokemon === 46){
        nomePokemon.innerHTML = 'Paras'
        txt.innerHTML = 'Um Pokémon Inseto e Grama que vive em florestas úmidas, Paras usa seus cogumelos parasitas para lutar e evolui para se tornar um Parasect, protegendo-se com sua carapaça resistente.'
        tipos.innerHTML = grass + bug
    }else if(aleatorizarPokemon === 47){
        nomePokemon.innerHTML = 'Parasect'
        txt.innerHTML = 'A evolução de Paras, Parasect é dominado por seus cogumelos parasitas, tornando-se um ser mais lento e submisso, atacando com suas garras afiadas em batalha.'
        tipos.innerHTML = bug + grass
    }else if(aleatorizarPokemon === 48){
        nomePokemon.innerHTML = 'Venonat'
        txt.innerHTML = 'Um Pokémon Inseto e Veneno com grandes olhos que emite luz na escuridão, Venonat é ágil e evolui para se tornar um Venomoth, lançando pós soníferos para adormecer seus inimigos.'
        tipos.innerHTML = bug + poison
    }else if(aleatorizarPokemon === 49){
        nomePokemon.innerHTML = 'Venomoth'
        txt.innerHTML = 'A evolução de Venonat, Venomoth é um predador noturno com habilidades de sono e controle mental, usando suas asas para criar ilusões e confundir seus oponentes.'
        tipos.innerHTML = bug + poison
    }else if(aleatorizarPokemon === 50){
        nomePokemon.innerHTML = 'Diglett'
        txt.innerHTML = 'Um pequeno Pokémon de Terra que vive em tocas subterrâneas, Diglett pode cavar rapidamente e evoluir para se tornar um Dugtrio, protegendo seu território com astúcia e velocidade.'
        tipos.innerHTML = ground
    }else if(aleatorizarPokemon === 51){
        nomePokemon.innerHTML = Dugtrio
        txt.innerHTML = ' A evolução de Diglett, Dugtrio é formado por três Digletts unidos e é capaz de cavar rapidamente túneis e emboscar presas, atacando com força e coordenação.'
        tipos.innerHTML = ground
    }else if(aleatorizarPokemon === 52){
        nomePokemon.innerHTML = 'Meowth'
        txt.innerHTML = 'Um Pokémon Normal conhecido por sua astúcia e amor por objetos brilhantes, Meowth é um companheiro valioso para treinadores devido à sua capacidade de encontrar tesouros, atacando com garras afiadas.'
        tipos.innerHTML = normal
    }else if(aleatorizarPokemon === 53){
        nomePokemon.innerHTML = 'Persian'
        txt.innerHTML = 'A evolução de Meowth, Persian é ágil e gracioso, com habilidades de luta e velocidade aprimoradas, atacando com agilidade e precisão.'
        tipos.innerHTML = normal
    }else if(aleatorizarPokemon === 54){
        nomePokemon.innerHTML = 'Psyduck'
        txt.innerHTML = ' Um Pokémon de Água com uma constante dor de cabeça, Psyduck é conhecido por suas habilidades psíquicas que emergem quando a dor aumenta, lançando poderosos ataques aquáticos.'
        tipos.innerHTML = water
    }else if(aleatorizarPokemon === 55){
        nomePokemon.innerHTML = 'Golduck'
        txt.innerHTML = 'A evolução de Psyduck, Golduck é mais controlado e poderoso, capaz de controlar sua energia psíquica para realizar ataques devastadores, dominando seus oponentes com sua força mental.'
        tipos.innerHTML = water
    }else if(aleatorizarPokemon === 56){
        nomePokemon.innerHTML = 'Mankey'
        txt.innerHTML = 'Um Pokémon Lutador conhecido por sua agressividade e temperamento explosivo, Mankey ataca ferozmente quando provocado, lançando golpes poderosos em seus oponentes.'
        tipos.innerHTML = fighting
    }else if(aleatorizarPokemon === 57){
        nomePokemon.innerHTML = 'Primeape'
        txt.innerHTML = ' A evolução de Mankey, Primeape é ainda mais agressivo e difícil de controlar, atacando com selvageria quando enfurecido, defendendo seu território com ferocidade.'
        tipos.innerHTML = fighting
    }else if(aleatorizarPokemon === 58){
        nomePokemon.innerHTML = 'Growlithe'
        txt.innerHTML = 'Um Pokémon de Fogo leal e protetor, Growlithe é comumente usado por policiais e bombeiros devido à sua natureza corajosa, atacando com bolas de fogo para proteger seus amigos..'
        tipos.innerHTML = fire
    }else if(aleatorizarPokemon === 59){
        nomePokemon.innerHTML = 'Arcanine'
        txt.innerHTML = 'A evolução de Growlithe, Arcanine é majestoso e poderoso, capaz de correr incrivelmente rápido e lançar chamas intensas, defendendo sua equipe com determinação.'
        tipos.innerHTML = fire
    }else if(aleatorizarPokemon === 60){
        nomePokemon.innerHTML = 'Poliwag'
        txt.innerHTML = 'Um pequeno Pokémon de Água com uma bolha em sua barriga, Poliwag é conhecido por sua natureza dócil e evolui para se tornar um Poliwhirl, lançando bolhas de água para se defender.'
        tipos.innerHTML = water
    }else if(aleatorizarPokemon === 61){
        nomePokemon.innerHTML = 'Poliwhirl'
        txt.innerHTML = 'A evolução de Poliwag, Poliwhirl é mais ágil e pode usar as espirais em seus braços para lançar poderosos ataques, nadando rapidamente para escapar de seus inimigos.'
        tipos.innerHTML = water
    }else if(aleatorizarPokemon === 62){
        nomePokemon.innerHTML = 'Poliwrath'
        txt.innerHTML = 'O final de Poliwag, Poliwrath é um poderoso Pokémon de Água e Lutador com habilidades de luta excepcionais, dominando seus oponentes com golpes precisos e poderosos.'
        tipos.innerHTML = water + fighting
    }else if(aleatorizarPokemon === 63){
        nomePokemon.innerHTML = 'Abra'
        txt.innerHTML = 'Um Pokémon Psíquico com poderes telepáticos, Abra é frágil e adormece frequentemente, evoluindo para se tornar um Kadabra, protegendo-se com suas habilidades psíquicas.'
        tipos.innerHTML = psychic
    }else if(aleatorizarPokemon === 64){
        nomePokemon.innerHTML = 'Kadabra'
        txt.innerHTML = 'A evolução de Abra, Kadabra é mais forte e capaz de realizar poderosos ataques psíquicos, mas permanece instável até se tornar um Alakazam, dominando a mente de seus oponentes.'
        tipos.innerHTML = psychic
    }else if(aleatorizarPokemon === 65){
        nomePokemon.innerHTML = 'Alakazam'
        txt.innerHTML = 'O final de Abra, Alakazam é um mestre da telecinesia, com um QI incrivelmente alto e habilidades de luta psíquicas poderosas, derrotando seus oponentes com pura inteligência e poder.'
        tipos.innerHTML = psychic
    }else if(aleatorizarPokemon === 66){
        nomePokemon.innerHTML = 'Machop'
        txt.innerHTML = ' Um Pokémon Lutador conhecido por sua força física, Machop treina incansavelmente para se tornar mais forte e evoluir para se tornar um Machoke, lutando com dedicação e determinação.'
        tipos.innerHTML = fighting
    }else if(aleatorizarPokemon === 67){
        nomePokemon.innerHTML = 'Machoke'
        txt.innerHTML = 'A evolução de Machop, Machoke é musculoso e poderoso, capaz de levantar objetos pesados e realizar ataques devastadores, protegendo seus amigos com sua força.'
        tipos.innerHTML = fighting
    }else if(aleatorizarPokemon === 68){
        nomePokemon.innerHTML = 'Machamp'
        txt.innerHTML = 'O final de Machop, Machamp é um mestre de artes marciais com quatro braços que pode realizar uma série impressionante de ataques em batalha, dominando seus oponentes com sua agilidade.'
        tipos.innerHTML = fighting
    }else if(aleatorizarPokemon === 69){
        nomePokemon.innerHTML = 'Bellsprout'
        txt.innerHTML = 'Um Pokémon de Grama e Veneno com uma forma semelhante a uma planta carnívora, Bellsprout captura presas usando suas vinhas e evolui para se tornar um Weepinbell, defendendo-se com suas folhas afiadas.'
        tipos.innerHTML = grass + poison
    }else if(aleatorizarPokemon === 70){
        nomePokemon.innerHTML = 'Weepinbell'
        txt.innerHTML = 'A evolução de Bellsprout, Weepinbell é uma planta venenosa com um aroma doce que atrai presas, preparando-se para se tornar um Victreebel, atacando com suas mandíbulas afiadas.'
        tipos.innerHTML = grass + poison
    }else if(aleatorizarPokemon === 71){
        nomePokemon.innerHTML = 'Victreebell'
        txt.innerHTML = ' O final de Bellsprout, Victreebel é uma planta venenosa grande e feroz que captura presas com suas enormes mandíbulas, dominando seus inimigos com sua ferocidade.'
        tipos.innerHTML = grass + poison
    }else if(aleatorizarPokemon === 72){
        nomePokemon.innerHTML = 'Tentacool'
        txt.innerHTML = 'Um Pokémon de Água e Veneno com tentáculos venenosos, Tentacool flutua em mares e oceanos, às vezes sendo confundido com uma água-viva, defendendo-se com seus tentáculos.'
        tipos.innerHTML = water + poison
    }else if(aleatorizarPokemon === 73){
        nomePokemon.innerHTML = 'Tentacruel'
        txt.innerHTML = 'A evolução de Tentacool, Tentacruel é maior e mais perigoso, capaz de atacar com seus tentáculos e controlar a água ao seu redor, protegendo seu território com astúcia.'
        tipos.innerHTML = water + poison
    }else if(aleatorizarPokemon === 74){
        nomePokemon.innerHTML = 'Geodude'
        txt.innerHTML = 'Um Pokémon de Pedra e Terra com um corpo rochoso, Geodude rola e lança pedras em seus inimigos e evolui para se tornar um Graveler, defendendo-se com sua resistência.'
        tipos.innerHTML = rock + ground
    }else if(aleatorizarPokemon === 75){
        nomePokemon.innerHTML = 'Graveler'
        txt.innerHTML = ' A evolução de Geodude, Graveler é mais resistente e pode rolar rapidamente montanha abaixo, esmagando tudo em seu caminho, atacando com força bruta.'
        tipos.innerHTML = rock + ground
    }else if(aleatorizarPokemon === 76){
        nomePokemon.innerHTML = 'Golem'
        txt.innerHTML = 'O final de Geodude, Golem é uma rocha imensa com poderes destrutivos, capaz de causar terremotos e deslizamentos de terra, protegendo-se com sua resistência inabalável.'
        tipos.innerHTML = rock + ground
    }else if(aleatorizarPokemon === 77){
        nomePokemon.innerHTML = 'Ponyta'
        txt.innerHTML = 'Um Pokémon de Fogo com uma juba flamejante, Ponyta é conhecido por sua graça e velocidade ao correr, evoluindo para se tornar um Rapidash, atacando com chamas intensas.'
        tipos.innerHTML = fire
    }else if(aleatorizarPokemon === 78){
        nomePokemon.innerHTML = 'Rapidash'
        txt.innerHTML = 'A evolução de Ponyta, Rapidash é um cavalo de fogo incrivelmente rápido que pode lançar chamas enquanto corre, defendendo seu território com sua velocidade e agilidade.'
        tipos.innerHTML = fire
    }else if(aleatorizarPokemon === 79){
        nomePokemon.innerHTML = 'Slowpoke'
        txt.innerHTML = 'Um Pokémon de Água e Psíquico conhecido por sua lentidão e natureza relaxada, Slowpoke pode parecer bobo, mas possui habilidades psíquicas poderosas, protegendo-se com sua resistência.'
        tipos.innerHTML = water + psychic
    }else if(aleatorizarPokemon === 80){
        nomePokemon.innerHTML = 'Slowbro'
        txt.innerHTML = ' A evolução de Slowpoke, Slowbro é uma combinação de Slowpoke e uma concha que lhe confere proteção extra e poderes psíquicos amplificados, defendendo-se com sua concha resistente.'
        tipos.innerHTML = water + psychic
    }else if(aleatorizarPokemon === 81){
        nomePokemon.innerHTML = 'Magnemite'
        txt.innerHTML = ' Um Pokémon Elétrico e Aço que flutua usando seu magnetismo, Magnemite é comummente encontrado em áreas urbanas e industriais, defendendo-se com sua eletricidade.'
        tipos.innerHTML = eletric + steel
    }else if(aleatorizarPokemon === 82){
        nomePokemon.innerHTML = 'Magneton'
        txt.innerHTML = ' A evolução de Magnemite, Magneton é composto por três Magnemites unidos e é capaz de gerar campos magnéticos poderosos, protegendo-se com sua resistência magnética.'
        tipos.innerHTML = eletric + steel
   }else if(aleatorizarPokemon === 83){
    nomePokemon.innerHTML = `Farfetch'd`
    txt.innerHTML = `Um Pokémon Normal e Voador conhecido por sua lealdade e por carregar um alho-poró como arma, Farfetch'd é um lutador habilidoso, defendendo-se com seu alho-poró afiado.`
    tipos.innerHTML = normal + flying
   }else if(aleatorizarPokemon === 84){
    nomePokemon.innerHTML = 'Doduo'
    txt.innerHTML = 'Um pássaro Normal e Voador com duas cabeças que brigam entre si, Doduo é incrivelmente rápido e evolui para se tornar um Dodrio, atacando com suas garras afiadas.'
    tipos.innerHTML = normal + flying
   }else if(aleatorizarPokemon === 85){
    nomePokemon.innerHTML = 'Dodrio'
    txt.innerHTML = 'A evolução de Doduo, Dodrio é ainda mais rápido e capaz de correr em velocidades incríveis, atacando com seus bicos afiados, defendendo-se com sua velocidade.'
    tipos.innerHTML = normal + flying
   }else if(aleatorizarPokemon === 86){
    nomePokemon.innerHTML = 'Seel'
    txt.innerHTML = 'Um Pokémon de Água com uma camada de gordura que o protege do frio, Seel é dócil e evolui para se tornar um Dewgong, defendendo-se com sua gordura.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 87){
    nomePokemon.innerHTML = 'Dewgong'
    txt.innerHTML = 'A evolução de Seel, Dewgong é um Pokémon de Água e Gelo que pode nadar em águas congelantes e lançar ataques gelados, protegendo-se com sua resistência ao frio.'
    tipos.innerHTML = water + ice
   }else if(aleatorizarPokemon === 88){
    nomePokemon.innerHTML = 'Grimir'
    txt.innerHTML = 'Um Pokémon Veneno conhecido por sua aparência viscosa e odor repugnante, Grimer é comumente encontrado em áreas poluídas, atacando com seu veneno corrosivo.'
    tipos.innerHTML = poison
   }else if(aleatorizarPokemon === 89){
    nomePokemon.innerHTML = 'Muk'
    txt.innerHTML = 'A evolução de Grimer, Muk é uma massa viscosa e tóxica que emite gases venenosos, muitas vezes sendo encontrada em locais contaminados, defendendo-se com sua imunidade ao veneno.'
    tipos.innerHTML = poison
   }else if(aleatorizarPokemon === 90){
    nomePokemon.innerHTML = 'Shellder'
    txt.innerHTML = 'Um Pokémon de Água com uma concha em forma de pinça, Shellder é conhecido por sua natureza protetora e evolui para se tornar um Cloyster, defendendo-se com sua concha resistente.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 91){
    nomePokemon.innerHTML = 'Cloyster'
    txt.innerHTML = 'A evolução de Shellder, Cloyster é uma ostra dura e resistente com uma pérola dentro, capaz de lançar projéteis de gelo em seus inimigos, protegendo-se com sua concha afiada.'
    tipos.innerHTML = water + ice
   }else if(aleatorizarPokemon === 92){
    nomePokemon.innerHTML = 'Gastly'
    txt.innerHTML = 'Um Pokémon Fantasma e Veneno que se materializa a partir de névoas venenosas, Gastly assombra lugares escuros e evolui para se tornar um Haunter, atacando com seus golpes espectrais.'
    tipos.innerHTML = ghost + poison
   }else if(aleatorizarPokemon === 93){
    nomePokemon.innerHTML = 'Haunter'
    txt.innerHTML = 'A evolução de Gastly, Haunter é um espírito travesso que gosta de assustar e pregar peças em pessoas desavisadas, evoluindo para se tornar um Gengar, defendendo-se com seus truques fantasmas.'
    tipos.innerHTML = ghost + poison
   }else if(aleatorizarPokemon === 94){
    nomePokemon.innerHTML = 'Gengar'
    txt.innerHTML = 'O final de Gastly, Gengar é um Pokémon Fantasma e Veneno malicioso que gosta de brincar com suas vítimas enquanto se esconde nas sombras, atacando com suas habilidades psíquicas e venenosas.'
    tipos.innerHTML = ghost + poison
   }else if(aleatorizarPokemon === 95){
    nomePokemon.innerHTML = 'Onix'
    txt.innerHTML = 'Um Pokémon de Pedra e Terra conhecido por sua imensa força e tamanho, Onix vive em cavernas subterrâneas e é temido por muitos, defendendo-se com sua força física e resistência.'
    tipos.innerHTML = ground + rock
   }else if(aleatorizarPokemon === 96){
    nomePokemon.innerHTML = 'Drowzee'
    txt.innerHTML = ' Um Pokémon Psíquico com um olfato aguçado, Drowzee se alimenta dos sonhos de seus inimigos e evolui para se tornar um Hypno, atacando com suas habilidades psíquicas.'
    tipos.innerHTML = psychic
   }else if(aleatorizarPokemon === 97){
    nomePokemon.innerHTML = 'Hypno'
    txt.innerHTML = 'A evolução de Drowzee, Hypno é um hipnotizador habilidoso que pode controlar as mentes dos outros usando seu pêndulo, defendendo-se com suas ilusões e poder mental.'
    tipos.innerHTML = psychic
   }else if(aleatorizarPokemon === 98){
    nomePokemon.innerHTML = 'Krabby'
    txt.innerHTML = 'Um Pokémon de Água com garras afiadas, Krabby é um excelente lutador subaquático e evolui para se tornar um Kingler, atacando com suas garras poderosas.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 99){
    nomePokemon.innerHTML = 'Kingler'
    txt.innerHTML = 'A evolução de Krabby, Kingler é um caranguejo gigante com garras poderosas que podem cortar até mesmo as coisas mais duras, defendendo-se com suas pinças afiadas.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 100){
    nomePokemon.innerHTML = 'Voltorb'
    txt.innerHTML = 'Um Pokémon Elétrico que se assemelha a uma pokébola, Voltorb pode explodir a qualquer momento, liberando eletricidade destrutiva, defendendo-se com suas explosões elétricas.'
    tipos.innerHTML = eletric
   }else if(aleatorizarPokemon === 101){
    nomePokemon.innerHTML = 'Electrode'
    txt.innerHTML = 'A evolução de Voltorb, Electrode é ainda mais volátil e pode explodir em um flash de luz cegante e eletricidade poderosa, defendendo-se com suas explosões surpresa.'
    tipos.innerHTML = eletric
   }else if(aleatorizarPokemon === 102){
    nomePokemon.innerHTML = 'Exeggcute'
    txt.innerHTML = 'Um conjunto de ovos de Grama e Psíquico que trabalham juntos como um só, Exeggcute é vulnerável quando separado, evoluindo para se tornar um Exeggutor, atacando com seus frutos.'
    tipos.innerHTML = grass + psychic
   }else if(aleatorizarPokemon === 103){
    nomePokemon.innerHTML = 'Exeggcutor'
    txt.innerHTML = 'A evolução de Exeggcute, Exeggutor é uma palmeira gigante com cabeças de coco que possuem habilidades psíquicas poderosas, defendendo-se com sua altura e alcance.'
    tipos.innerHTML = grass + psychic
   }else if(aleatorizarPokemon === 104){
    nomePokemon.innerHTML = 'Cubone'
    txt.innerHTML = 'Um Pokémon Solitário de Terra conhecido por carregar um crânio de sua mãe falecida, Cubone é triste e solitário, evoluindo para se tornar um Marowak, defendendo-se com seu osso.'
    tipos.innerHTML = ground
   }else if(aleatorizarPokemon === 105){
    nomePokemon.innerHTML = 'Marowak'
    txt.innerHTML = 'A evolução de Cubone, Marowak é mais forte e determinado, protegendo-se com seu osso e atacando com golpes poderosos, defendendo-se com sua lealdade.'
    tipos.innerHTML = ground
   }else if(aleatorizarPokemon === 106){
    nomePokemon.innerHTML = 'Hitmonlee'
    txt.innerHTML = ' Um mestre de artes marciais com pernas elásticas, Hitmonlee pode esticar suas pernas para atacar com poderosos chutes, defendendo-se com sua agilidade e força.'
    tipos.innerHTML = fighting
   }else if(aleatorizarPokemon === 107){
    nomePokemon.innerHTML = 'Hitmonchan'
    txt.innerHTML = ' Um mestre de boxe com punhos incrivelmente rápidos, Hitmonchan é capaz de lançar uma série de socos em rápida sucessão, defendendo-se com sua técnica impecável.'
    tipos.innerHTML = fighting
   }else if(aleatorizarPokemon === 108){
    nomePokemon.innerHTML = 'Lickitung'
    txt.innerHTML = ' Um Pokémon de Língua Normal que pode esticar sua língua para alcançar objetos distantes, Lickitung é conhecido por lamber tudo o que vê, defendendo-se com sua língua pegajosa.'
    tipos.innerHTML = normal
   }else if(aleatorizarPokemon === 109){
    nomePokemon.innerHTML = 'Koffing'
    txt.innerHTML = ' Um balão de gás venenoso que flutua através do ar, Koffing pode explodir a qualquer momento, liberando gases tóxicos, defendendo-se com sua nuvem de veneno.'
    tipos.innerHTML = poison
   }else if(aleatorizarPokemon === 110){
    nomePokemon.innerHTML = 'Weezing'
    txt.innerHTML = 'A evolução de Koffing, Weezing é formado por dois Koffings unidos que produzem ainda mais gases venenosos, defendendo-se com seu gás tóxico e explosões de fumaça.'
    tipos.innerHTML = poison
   }else if(aleatorizarPokemon === 111 ){
    nomePokemon.innerHTML = 'Rhyhorn'
    txt.innerHTML = 'Um Pokémon de Pedra e Terra com uma pele resistente, Rhyhorn é comumente usado como montaria devido à sua força, evoluindo para se tornar um Rhydon, defendendo-se com seus chifres afiados.'
    tipos.innerHTML = rock + ground
   }else if(aleatorizarPokemon === 112){
    nomePokemon.innerHTML = 'Rhydon'
    txt.innerHTML = 'A evolução de Rhyhorn, Rhydon é imenso e poderoso, capaz de perfurar rochas com seus chifres afiados e lançar ataques devastadores, defendendo-se com sua resistência.'
    tipos.innerHTML = rock + ground
   }else if(aleatorizarPokemon === 113){
    nomePokemon.innerHTML = 'Chansey'
    txt.innerHTML = 'Um Pokémon Normal conhecido por sua gentileza e por carregar um ovo em sua bolsa, Chansey é uma enfermeira dedicada, protegendo seus ovos com sua vida.'
    tipos.innerHTML = normal
   }else if(aleatorizarPokemon === 114){
    nomePokemon.innerHTML = 'Tangela'
    txt.innerHTML = 'Um Pokémon de Grama com vinhas longas e grossas que podem enrolar-se em torno de seus inimigos, Tangela é esquivo e difícil de capturar, defendendo-se com suas vinhas.'
    tipos.innerHTML = grass
   }else if(aleatorizarPokemon === 115){
    nomePokemon.innerHTML = 'Kangaskhan'
    txt.innerHTML = 'Um Pokémon Maternal que protege seus filhotes com ferocidade, Kangaskhan é poderoso e pode lançar poderosos ataques, defendendo sua família com sua força.'
    tipos.innerHTML = normal
   }else if(aleatorizarPokemon === 116){
    nomePokemon.innerHTML = 'Horsea'
    txt.innerHTML = 'Um Pokémon de Água com uma cabeça em forma de cavalo-marinho, Horsea pode lançar jatos de água de seus bicos, defendendo-se com seus movimentos ágeis na água.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 117){
    nomePokemon.innerHTML = 'Seadra'
    txt.innerHTML = ' A evolução de Horsea, Seadra é maior e mais poderoso, com habilidades de natação aprimoradas e um poderoso jato de água, defendendo-se com sua resistência.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 118){
    nomePokemon.innerHTML = 'Goldeen'
    txt.innerHTML = 'Um peixe dourado de Água que brilha em rios e lagos, Goldeen é rápido e ágil, evoluindo para se tornar um Seaking, defendendo-se com seus chifres afiados.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 119){
    nomePokemon.innerHTML = 'Seaking'
    txt.innerHTML = 'A evolução de Goldeen, Seaking é maior e mais poderoso, com um chifre afiado que pode perfurar rochas e defesas inimigas, defendendo-se com sua força e agilidade.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 120){
    nomePokemon.innerHTML = 'Staryu'
    txt.innerHTML = 'Um Pokémon de Água com um corpo em forma de estrela que pode se regenerar, Staryu é rápido e ágil, evoluindo para se tornar um Starmie, defendendo-se com seus raios brilhantes.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 121){
    nomePokemon.innerHTML = 'Starmie'
    txt.innerHTML = 'A evolução de Staryu, Starmie é uma estrela do mar poderosa com habilidades psíquicas e aquáticas, defendendo-se com seus raios brilhantes e poderosos ataques psíquicos.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 122){
    nomePokemon.innerHTML = 'Mr.Mime'
    txt.innerHTML = 'Um Pokémon Psíquico conhecido por sua habilidade de criar barreiras invisíveis, Mr. Mime é um artista talentoso e protetor, defendendo-se com suas habilidades psíquicas.'
    tipos.innerHTML = psychic
   }else if(aleatorizarPokemon === 123){
    nomePokemon.innerHTML = 'Scyther'
    txt.innerHTML = ' Um Pokémon Inseto e Voador com lâminas afiadas em seus braços, Scyther é um predador ágil e mortal, defendendo-se com suas garras e asas.'
    tipos.innerHTML = bug + flying
   }else if(aleatorizarPokemon === 124){
    nomePokemon.innerHTML = 'Jynx'
    txt.innerHTML = ' Um Pokémon de Gelo e Psíquico conhecido por sua graça e beleza, Jynx pode lançar beijos congelantes que podem paralisar seus oponentes, defendendo-se com suas habilidades psíquicas.'
    tipos.innerHTML = ice + psychic
   }else if(aleatorizarPokemon === 125){
    nomePokemon.innerHTML = 'Electabuzz'
    txt.innerHTML = 'Um Pokémon Elétrico conhecido por sua velocidade e poderosas descargas elétricas, Electabuzz é um lutador habilidoso, defendendo-se com seus ataques elétricos.'
    tipos.innerHTML = eletric
   }else if(aleatorizarPokemon === 126){
    nomePokemon.innerHTML = 'Magmar'
    txt.innerHTML = 'Um Pokémon de Fogo conhecido por sua pele escaldante e chamas intensas, Magmar é poderoso e pode lançar bolas de fogo que podem derreter metal, defendendo-se com suas chamas.'
    tipos.innerHTML = fire
   }else if(aleatorizarPokemon === 127){
    nomePokemon.innerHTML = 'Pinsir'
    txt.innerHTML = ' Um Pokémon Inseto conhecido por sua força e mandíbulas poderosas, Pinsir pode esmagar objetos com facilidade, defendendo-se com suas garras afiadas.'
    tipos.innerHTML = bug 
   }else if(aleatorizarPokemon === 128){
    nomePokemon.innerHTML = 'Tauros'
    txt.innerHTML = 'Um Pokémon de Normal conhecido por sua ferocidade e temperamento violento, Tauros pode carregar adversários com facilidade, defendendo-se com sua força física.'
    tipos.innerHTML = normal
   }else if(aleatorizarPokemon === 129){
    nomePokemon.innerHTML = 'Magikarp'
    txt.innerHTML = 'Um Pokémon de Água conhecido por sua fraqueza e inutilidade em batalha, Magikarp pode saltar alto, evoluindo para se tornar um Gyarados, defendendo-se com sua fúria.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 130){
    nomePokemon.innerHTML = 'Gyarados'
    txt.innerHTML = 'A evolução de Magikarp, Gyarados é um dragão do mar poderoso e temido que pode criar maremotos com um simples balançar de sua cauda, defendendo-se com sua fúria e poder.'
    tipos.innerHTML = water + flying
   }else if(aleatorizarPokemon === 131){
    nomePokemon.innerHTML = 'Lapras'
    txt.innerHTML = ' Um Pokémon de Água e Gelo conhecido por sua gentileza e capacidade de transportar pessoas em suas costas, Lapras é um nadador habilidoso, defendendo-se com sua resistência.'
    tipos.innerHTML = ice + water
   }else if(aleatorizarPokemon === 132){
    nomePokemon.innerHTML = 'Ditto'
    txt.innerHTML = ' Um Pokémon Normal conhecido por sua habilidade de se transformar em qualquer coisa, Ditto é elusivo e difícil de capturar, defendendo-se com sua capacidade de adaptação.'
    tipos.innerHTML = normal
   }else if(aleatorizarPokemon === 133){
    nomePokemon.innerHTML = 'Eevee'
    txt.innerHTML = 'Um Pokémon Normal conhecido por sua capacidade de evoluir para várias formas, Eevee é adorável e versátil, evoluindo para se adaptar a diferentes ambientes e desafios.'
    tipos.innerHTML = normal
   }else if(aleatorizarPokemon === 134){
    nomePokemon.innerHTML = 'Vaporeon'
    txt.innerHTML = 'Uma das evoluções de Eevee, Vaporeon é um Pokémon de Água com uma pelagem que repele a água, permitindo-lhe nadar rapidamente e lançar poderosos ataques aquáticos.'
    tipos.innerHTML = water
   }else if(aleatorizarPokemon === 135){
    nomePokemon.innerHTML = 'Jolteon'
    txt.innerHTML = 'Uma das evoluções de Eevee, Jolteon é um Pokémon Elétrico com pelos que podem gerar eletricidade estática, permitindo-lhe lançar poderosos ataques elétricos.'
    tipos.innerHTML = eletric
   }else if(aleatorizarPokemon === 136){
    nomePokemon.innerHTML = 'Flareon'
    txt.innerHTML = ' Uma das evoluções de Eevee, Flareon é um Pokémon de Fogo com uma temperatura corporal extremamente alta, permitindo-lhe lançar poderosos ataques de fogo.'
    tipos.innerHTML = fire
   }else if(aleatorizarPokemon === 137){
    nomePokemon.innerHTML = 'Porygon'
    txt.innerHTML = 'Um Pokémon Normal artificial criado a partir de código de computador, Porygon pode se mover através de ambientes digitais, defendendo-se com suas habilidades tecnológicas.'
    tipos.innerHTML = normal
   }else if(aleatorizarPokemon === 138){
    nomePokemon.innerHTML = 'Omanyte'
    txt.innerHTML = 'Um Pokémon de Água e Rocha que foi extinto há milhões de anos, Omanyte é revivido de fósseis e evolui para se tornar um Omastar, defendendo-se com sua concha resistente.'
    tipos.innerHTML = water + rock
   }else if(aleatorizarPokemon === 139){
    nomePokemon.innerHTML = 'Omastar'
    txt.innerHTML = 'A evolução de Omanyte, Omastar é uma criatura marinha poderosa e antiga com habilidades aquáticas e rochosas, defendendo-se com sua resistência e poder.'
    tipos.innerHTML = water + rock
   }else if(aleatorizarPokemon === 140){
    nomePokemon.innerHTML = 'Kabuto'
    txt.innerHTML = 'Um Pokémon de Água e Rocha que foi extinto há milhões de anos, Kabuto é revivido de fósseis e evolui para se tornar um Kabutops, defendendo-se com sua carapaça.'
    tipos.innerHTML = water + rock
   }else if(aleatorizarPokemon === 141){
    nomePokemon.innerHTML = 'Kabutops'
    txt.innerHTML = 'A evolução de Kabuto, Kabutops é uma criatura de água e rocha com lâminas afiadas em seus braços, atacando com golpes rápidos e precisos, defendendo-se com sua destreza.'
    tipos.innerHTML = water + rock
   }else if(aleatorizarPokemon === 142){
    nomePokemon.innerHTML = 'Aerodactyl'
    txt.innerHTML = 'Um Pokémon de Pedra e Voador que foi extinto há milhões de anos, Aerodactyl é revivido de fósseis e pode voar a velocidades incríveis, atacando com suas mandíbulas poderosas.'
    tipos.innerHTML = rock + flying 
   }else if(aleatorizarPokemon === 143){
    nomePokemon.innerHTML = 'Snorlax'
    txt.innerHTML = 'Um Pokémon Normal conhecido por sua preguiça e apetite voraz, Snorlax pode bloquear caminhos inteiros enquanto dorme, defendendo-se com sua força e peso.'
    tipos.innerHTML = normal
   }else if(aleatorizarPokemon === 144){
    nomePokemon.innerHTML = 'Articuno'
    txt.innerHTML = 'Um Pokémon Lendário de Gelo e Voador que pode criar tempestades de gelo, Articuno é majestoso e poderoso, defendendo-se com seus poderes congelantes.'
    tipos.innerHTML = ice + flying
   }else if(aleatorizarPokemon === 145){
    nomePokemon.innerHTML = 'Zapdos'
    txt.innerHTML = ' Um Pokémon Lendário Elétrico e Voador que pode lançar raios poderosos, Zapdos é rápido e feroz, defendendo-se com seus ataques elétricos.'
    tipos.innerHTML = eletric + flying
   }else if(aleatorizarPokemon === 146){
    nomePokemon.innerHTML = 'Moltres'
    txt.innerHTML = 'Um Pokémon Lendário de Fogo e Voador que pode criar chamas intensas, Moltres é impressionante e poderoso, defendendo-se com suas chamas ardentes.'
    tipos.innerHTML = fire + flying
   }else if(aleatorizarPokemon === 147){
    nomePokemon.innerHTML = 'Dratini'
    txt.innerHTML = 'Um Pokémon Dragão raro e misterioso, Dratini é difícil de encontrar e evolui para se tornar um Dragonair, defendendo-se com sua resistência.'
    tipos.innerHTML = dragon 
   }else if(aleatorizarPokemon === 148){
    nomePokemon.innerHTML = 'Dragonair'
    txt.innerHTML = 'A evolução de Dratini, Dragonair é uma serpente majestosa com poderes psíquicos e aquáticos, defendendo-se com suas habilidades elementares.'
    tipos.innerHTML = dragon
   }else if(aleatorizarPokemon === 149){
    nomePokemon.innerHTML = 'Dragonite'
    txt.innerHTML = 'O final de Dratini, Dragonite é um dragão lendário que pode voar incrivelmente rápido e lançar ataques poderosos, defendendo-se com sua imensa força e poder.'
    tipos.innerHTML = dragon + flying
   }else if(aleatorizarPokemon === 150){
    nomePokemon.innerHTML = 'Mewtwo'
    txt.innerHTML = 'Criado artificialmente a partir do DNA de Mew, é um Pokémon Psíquico poderoso e determinado, inicialmente criado como uma arma.'
    tipos.innerHTML = psychic
   }else if(aleatorizarPokemon === 151){
    nomePokemon.innerHTML = 'Mew'
    txt.innerHTML = 'Um Pokémon Lendário Psíquico, raro e misterioso, que dizem possuir o DNA de todos os Pokémon.'
    tipos.innerHTML = psychic
   }
}
triangulo.addEventListener('mouseover', function() {
    if (triangulo.className === 'trianguloPorta') {
        abrirPokedex();
    } else if (triangulo.className === 'trianguloFechar') {
        fecharPokedex();
    }
})
