'use strict';

const pokemon1 = document.getElementById("pokemon1");
const pokemon2 = document.getElementById("pokemon2");
const btn = document.querySelector(".btn");
// these means pokemon 1 and 2, images 1 and 2 that corresponds to each pokemon
let p1, p2,img1, img2;

async function getRandomPokemon() {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',{mode:'cors'})
  return pokemon.json()
}
// refactor con async await, esa vaina esta muy dura solo con promises
async function getPokemonImage(pokemon) {
  const pokemonImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  return pokemonImage.json()
  // pokemonImage.json().then(response=>{
  //   image = response.sprites.other['official-artwork']['front_default']
  // })
}

async function gatherPokemons(){
  p1 = await getRandomPokemon()
  p1 = p1.results[Math.floor(Math.random() * 1302)].name
  p2 = await getRandomPokemon()
  p2 = p2.results[Math.floor(Math.random() * 1302)].name
}

async function setImages(pokemonName1, pokemonName2){
  img1 = await getPokemonImage(pokemonName1)
  img1 = img1.sprites.other['official-artwork']['front_default']
  img2 = await getPokemonImage(pokemonName2)
  img2 = img2.sprites.other['official-artwork']['front_default']
}

btn.addEventListener('click', async (e) => {
  // calls the API to get the name
  await gatherPokemons()
  await setImages(p1,p2)
})

// functions used to paint the sprites
