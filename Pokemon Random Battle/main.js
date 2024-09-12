'use strict';

const pokemon1 = document.getElementById("pokemon1");
const pokemon2 = document.getElementById("pokemon2");
const btn = document.querySelector(".btn");
const containers = document.querySelectorAll(".pokemon");
const resultsDiv = document.querySelector(".match-results");
const winnerText = document.querySelector("#winner");
const looserText = document.querySelector("#looser");
const pokemon1DataContainer = document.getElementById('pokemon1DataContainer');
const pokemon2DataContainer = document.getElementById('pokemon2DataContainer');
const pokemon1DataType = document.getElementById('pokemon1DataType');
const pokemon2DataType = document.getElementById('pokemon2DataType');
const pokemon1DataAttack = document.getElementById('pokemon1DataAttack');
const pokemon2DataAttack = document.getElementById('pokemon2DataAttack');
const pokemon1DataDefense = document.getElementById('pokemon1DataDefense');
const pokemon2DataDefense = document.getElementById('pokemon2DataDefense');
// these means pokemon 1 and 2, images 1 and 2 that corresponds to each pokemon. The attack 1 and 2 represents the battle points (the id will be the attack points for each pokemon for now)

let p1, p2,img1,img2,attack1,attack2;
let type1,type2,realAttack1,realAttack2, defence1,defence2;

window.addEventListener( 'onload', hideStats())
/**
 * hides pokemon stats on window load
 */
function hideStats() {
  pokemon1DataContainer.style.display = 'none'
  pokemon2DataContainer.style.display = 'none'
};

/**
 *  Unhides all stats after they have finished loading
 */
function showStats() {
  //invoke and set the pokemon type
  setType( p1 , p2 );
  //invoke and set the pokemon attack
  setAttack( p1 , p2 );
  //invoke and set the pokemon defence
  setDefence( p1 , p2 );
  //unhide the stats
  setTimeout(() => {
    //add the data to the stats section
    pokemon1DataType.innerText = type1;
    pokemon2DataType.innerText = type2;
    pokemon1DataAttack.innerText = realAttack1;
    pokemon2DataAttack.innerText = realAttack2;
    pokemon1DataDefense.innerText = defence1;
    pokemon2DataDefense.innerText = defence2;
    //unhide all the stats
    pokemon1DataContainer.style.display = 'block';
    pokemon2DataContainer.style.display = 'block';
  }, 500);

};

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

async function getPokemonStats(pokemonName) {
  const pokemonType = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return pokemonType.json()
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
  img1 = await getPokemonImage(pokemonName1);
  img1 = img1.sprites.other['official-artwork']['front_default']
  img2 = await getPokemonImage(pokemonName2)
  img2 = img2.sprites.other['official-artwork']['front_default']
}

/**
 * get the pokemon type
 * @param {string} pokemonName1 - 1st pokemon name
 * @param {string}} pokemonName2 - 2nd pokemon name
 */
async function setType(pokemonName1, pokemonName2) {
  type1 = await getPokemonStats(pokemonName1);
  type1 = type1.types[0].type.name;
  type2 = await getPokemonStats(pokemonName2);
  type2 = type2.types[0].type.name;
};

/**
 * get the pokemon attack stat
 * @param {string} pokemonName1 - 1st pokemon name
 * @param {string}} pokemonName2 - 2nd pokemon name
 */
async function setAttack(pokemonName1, pokemonName2) {
  realAttack1 = await getPokemonStats(pokemonName1);
  realAttack1 = realAttack1.stats[1].base_stat;
  realAttack2 = await getPokemonStats(pokemonName2);
  realAttack2 = realAttack2.stats[1].base_stat;
};

/**
 * get the pokemon defence stat
 * @param {string} pokemonName1 - 1st pokemon name
 * @param {string}} pokemonName2 - 2nd pokemon name
 */
async function setDefence(pokemonName1, pokemonName2) {
  defence1 = await getPokemonStats(pokemonName1);
  defence1 = defence1.stats[2].base_stat;
  defence2 = await getPokemonStats(pokemonName2);
  defence2 = defence2.stats[2].base_stat;
};

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
  await setImages( p1 , p2 );
  await setPokemonPoints( p1 , p2 );
  await showStats( p1 , p2 );

  /**
   * Paints the sprites
   */
  drawPokemons()
  /**
   * Triggers the game logic after 1 second
   */
  setTimeout(playMatch,1000)
})

