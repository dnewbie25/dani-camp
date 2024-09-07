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

/**
 * Retrieves a list of all Pokémon from the PokeAPI.
 *
 * @return {Promise} The response of the API in json.
 */
async function getRandomPokemon() {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',{mode:'cors'})
  return pokemon.json()
}

/**
 * Retrieves the image of a given Pokemon from the PokeAPI.
 *
 * @param {string} pokemon - The name of the Pokemon.
 * @return {Promise} The response of the API in json.
 */
async function getPokemonImage(pokemon) {
  const pokemonImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  return pokemonImage.json()
}


/**
 * Gets two random Pokémon names from the Pokémon API.
 *
 * @return {void}
 */
async function gatherPokemons(){
  p1 = await getRandomPokemon()
  p1 = p1.results[Math.floor(Math.random() * 1302)].name
  p2 = await getRandomPokemon()
  p2 = p2.results[Math.floor(Math.random() * 1302)].name
}

/**
 * Sets the images for two Pokémon based on their names.
 *
 * @param {string} pokemonName1 - The name of the first Pokémon.
 * @param {string} pokemonName2 - The name of the second Pokémon.
 * @return {void}
 */
async function setImages(pokemonName1, pokemonName2){
  img1 = await getPokemonImage(pokemonName1)
  img1 = img1.sprites.other['official-artwork']['front_default']
  img2 = await getPokemonImage(pokemonName2)
  img2 = img2.sprites.other['official-artwork']['front_default']
}


// game logic,the pokemon Id will be used as the attack points
/**
 * Retrieves the ID of a given Pokemon from the PokeAPI.
 *
 * @param {string} pokemon - The name of the Pokemon.
 * @return {Promise} The response of the API in json.
 */
async function getPokemonId(pokemon){
  const pokemonId = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  return pokemonId.json()
}


/**
 * Sets the battle points for two Pokemon based on their IDs.
 *
 * @param {string} pokemon1 - The name of the first Pokemon.
 * @param {string} pokemon2 - The name of the second Pokemon.
 * @return {void}
 */
async function setPokemonPoints(pokemon1, pokemon2){
  attack1 = await getPokemonId(pokemon1)
  attack1 = attack1.id
  attack2 = await getPokemonId(pokemon2)
  attack2 = attack2.id
}

/**
 * Plays a match between two Pokemon.
 *
 * @return {void}
 */
function playMatch(){
  if(resultsDiv.classList.contains("invisible")){
    resultsDiv.classList.remove("invisible")
  }
  if(attack1 > attack2){
    winnerText.textContent = `${p1.toUpperCase()}!`
    looserText.textContent = `${p2} loses😖`
  }else{
    winnerText.textContent = `${p2.toUpperCase()}!`
    looserText.textContent = `${p1} loses😖`
  }
}


/**
 * Paints the names and images of the two pokemons on the screen
 * @function
 * @param {void} - No parameters
 */
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



/**
 * Function that listens for clicks on the button and triggers the game
 * @function
 * @param {Event} e - The event triggered by the button
 */
btn.addEventListener('click', async (e) => {
  /**
   * Resets the results div to invisible
   */
  if(!resultsDiv.classList.contains("invisible")){
    resultsDiv.classList.add("invisible")
  }

  /**
   * Calls the API to get the name and image of the pokemon
   */
  await gatherPokemons()
  await setImages(p1,p2)
  await setPokemonPoints(p1,p2)

  /**
   * Paints the sprites
   */
  drawPokemons()
  /**
   * Triggers the game logic after 1 second
   */
  setTimeout(playMatch,1000)
})

