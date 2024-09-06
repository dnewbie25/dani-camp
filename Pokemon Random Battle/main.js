'use strict';

const pokemon1 = document.getElementById("pokemon1");
const pokemon2 = document.getElementById("pokemon2");
const btn = document.querySelector(".btn");
const containers = document.querySelectorAll(".pokemon")
const resultsDiv = document.querySelector(".match-results")
const winnerText = document.querySelector("#winner")
const looserText = document.querySelector("#looser")
// these means pokemon 1 and 2, images 1 and 2 that corresponds to each pokemon. The attack 1 and 2 represents the battle points (the id will be the attack points for each pokemon for now)

let p1, p2,img1,img2,attack1,attack2;

async function getRandomPokemon() {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',{mode:'cors'})
  return pokemon.json()
}
// refactor con async await, esa vaina esta muy dura solo con promises
async function getPokemonImage(pokemon) {
  const pokemonImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  return pokemonImage.json()
}

async function gatherPokemons(){
  p1 = await getRandomPokemon()
  p1 = p1.results[Math.floor(Math.random() * 1302)].name
  // p1 = p1[0].toUpperCase() + p1.substring(1)
  p2 = await getRandomPokemon()
  p2 = p2.results[Math.floor(Math.random() * 1302)].name
  // p2 = p2[0].toUpperCase() + p2.substring(1)
}

async function setImages(pokemonName1, pokemonName2){
  img1 = await getPokemonImage(pokemonName1)
  img1 = img1.sprites.other['official-artwork']['front_default']
  img2 = await getPokemonImage(pokemonName2)
  img2 = img2.sprites.other['official-artwork']['front_default']
}


// game logic,the pokemon Id will be used as the attack points
async function getPokemonId(pokemon){
  const pokemonId = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  return pokemonId.json()
}

async function setPokemonPoints(pokemon1, pokemon2){
  attack1 = await getPokemonId(pokemon1)
  attack1 = attack1.id
  attack2 = await getPokemonId(pokemon2)
  attack2 = attack2.id
}

function playMatch(){
  if(resultsDiv.classList.contains("invisible")){
    resultsDiv.classList.remove("invisible")
  }
  if(attack1 > attack2){
    winnerText.textContent = `${p1.toUpperCase()}!`
    looserText.textContent = `${p2} looses😖`
  }else{
    winnerText.textContent = `${p2.toUpperCase()}!`
    looserText.textContent = `${p1} looses😖`
  }
}

// functions used to paint the sprites
function drawPokemons(){
  containers.forEach(div=>{
    // renders the names
    const children = div.childNodes;
    if(children[1].id === 'name1'){
      children[1].textContent = p1
    }
    if(children[1].id === 'name2'){
      children[1].textContent = p2
    }
    // renders the images
    if(children[3].id === 'img1'){
      children[3].src = img1
    }
    if(children[3].id === 'img2'){
      children[3].src = img2
    }
  })
}
btn.addEventListener('click', async (e) => {
  // resets the winner
  if(!resultsDiv.classList.contains("invisible")){
    resultsDiv.classList.add("invisible")
  }
  // calls the API to get the name
  await gatherPokemons()
  await setImages(p1,p2)
  await setPokemonPoints(p1,p2)

  drawPokemons()
  setTimeout(playMatch,1000)
})
