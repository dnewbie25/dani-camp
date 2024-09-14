'use strict';

const pokemon1 = document.getElementById("pokemon1");
const pokemon2 = document.getElementById("pokemon2");
const btn = document.querySelector("#fight");
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
// modal window selectors
const modal = new bootstrap.Modal(document.getElementById('modal'))
const pokemonChoice1 = document.getElementById('choice1')
const pokemonChoice2 = document.getElementById('choice2')
const pokemonChoice1Btn = document.getElementById('choice1Btn')
const pokemonChoice2Btn = document.getElementById('choice2Btn')
const startBattleBtns = document.querySelectorAll('.startBattle')
// current pokemon selected
let currentChoice = 0;

// the below means pokemon 1 and 2, images 1 and 2 that corresponds to each pokemon. The attack 1 and 2 represents the battle points (the id will be the attack points for each pokemon for now)

let p1, p2, img1, img2, attack1, attack2;
let type1, type2, realAttack1, realAttack2, defense1, defense2;

window.addEventListener('onload', hideStats())
/**
 * hides pokemon stats on window load
 */
function hideStats() {
  pokemon1DataContainer.style.display = 'none'
  pokemon2DataContainer.style.display = 'none'
};

/**
 * Retrieves a list of all Pokémon from the PokeAPI.
 *
 * @return {Promise} The response of the API in json.
 */
async function getRandomPokemon() {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', { mode: 'cors' })
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
async function gatherPokemons() {
  const pokemon1 = await getRandomPokemon()
  const pokemon2 = await getRandomPokemon()
  p1 = pokemon1.results[Math.floor(Math.random() * 1302)].name
  p2 = pokemon2.results[Math.floor(Math.random() * 1302)].name
}

/**
 * Sets the images for two Pokémon based on their names.
 *
 * @param {string} pokemonName1 - The name of the first Pokémon.
 * @param {string} pokemonName2 - The name of the second Pokémon.
 * @return {void}
 */
async function setImages(pokemonName1, pokemonName2) {
  const image1 = await getPokemonImage(pokemonName1)
  const image2 = await getPokemonImage(pokemonName2)
  img1 = image1.sprites.other['official-artwork']['front_default']
  img2 = image2.sprites.other['official-artwork']['front_default']
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
 * get the pokemon defense stat
 * @param {string} pokemonName1 - 1st pokemon name
 * @param {string}} pokemonName2 - 2nd pokemon name
 */
async function setdefense(pokemonName1, pokemonName2) {
  defense1 = await getPokemonStats(pokemonName1);
  defense1 = defense1.stats[2].base_stat;
  defense2 = await getPokemonStats(pokemonName2);
  defense2 = defense2.stats[2].base_stat;
};

// game logic,the pokemon Id will be used as the attack points
/**
 * Retrieves the ID of a given Pokemon from the PokeAPI.
 *
 * @param {string} pokemon - The name of the Pokemon.
 * @return {Promise} The response of the API in json.
 */
async function getPokemonId(pokemon) {
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
async function setPokemonPoints(pokemon1, pokemon2) {
  attack1 = await getPokemonId(pokemon1)
  attack1 = attack1.id
  attack2 = await getPokemonId(pokemon2)
  attack2 = attack2.id
}

/**
 *  Unhides all stats after they have finished loading
 */
function showStats() {
  //invoke and set the pokemon type
  setType(p1, p2);
  //invoke and set the pokemon attack
  setAttack(p1, p2);
  //invoke and set the pokemon defense
  setdefense(p1, p2);
  //unhide the stats
  setTimeout(() => {
    //add the data to the stats section
    pokemon1DataType.innerText = type1;
    pokemon2DataType.innerText = type2;
    pokemon1DataAttack.innerText = realAttack1;
    pokemon2DataAttack.innerText = realAttack2;
    pokemon1DataDefense.innerText = defense1;
    pokemon2DataDefense.innerText = defense2;
    //unhide all the stats
    pokemon1DataContainer.style.display = 'block';
    pokemon2DataContainer.style.display = 'block';
  }, 500);

};

/**
 * Colors the pokemon stats based on who won
 * @param {number} number 
 */
function colorPokemonStats(number) {
  if (number === 1) {
    pokemon1DataContainer.setAttribute('class', 'text-success');
    pokemon2DataContainer.setAttribute('class', 'text-danger');
  } else {
    pokemon1DataContainer.setAttribute('class', 'text-danger');
    pokemon2DataContainer.setAttribute('class', 'text-success');
  }
};


/**
 * Plays a match between two Pokemon.
 *
 * @return {void}
 */
function playMatch() {
  if (resultsDiv.classList.contains("invisible")) {
    resultsDiv.classList.remove("invisible")
  }
  if (realAttack1 > realAttack2) {
    if(currentChoice === 1){
      colorPokemonStats(currentChoice);
      winnerText.textContent = `Your ${p1.toUpperCase()} Wins!`
      looserText.textContent = `${p2} loses😖`
    }else{
      colorPokemonStats(1);
      winnerText.textContent = `${p1.toUpperCase()} Wins!`
      looserText.textContent = `Your ${p2} loses😖`
    }
  } else {
    if(currentChoice === 2){
      colorPokemonStats(currentChoice);
      winnerText.textContent = `Your ${p2.toUpperCase()} Wins!`
      looserText.textContent = `${p1} loses😖`
    }else{
      colorPokemonStats(2);
      winnerText.textContent = `${p2.toUpperCase()} Wins!`
      looserText.textContent = `Your ${p1} loses😖`
    }
  }
}


/**
 * Paints the names and images of the two pokemons on the screen
 * @function
 * @param {void} - No parameters
 */
function drawPokemons() {
  containers.forEach(div => {
    // renders the names
    const children = div.childNodes;
    if (children[1].id === 'name1') {
      children[1].textContent = p1
    }
    if (children[1].id === 'name2') {
      children[1].textContent = p2
    }
    // renders the images
    if (children[3].id === 'img1') {
      children[3].src = img1
    }
    if (children[3].id === 'img2') {
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
  // fetchs the API, set the currentChoice as 0 because no pokemon has been selected
  currentChoice = 0;
  await gatherPokemons()
  await setImages(p1, p2);

  // before continuing, it shows a model to choose pokemon 1 or 2, and sets its inside images
  pokemonChoice1.src = img1;
  pokemonChoice2.src = img2;
  pokemonChoice1Btn.textContent = p1;
  pokemonChoice2Btn.textContent = p2;
  modal.show()
})

/**
 * Event listener for the start battle buttons. When clicked, it triggers the start of the game letting player to choose
 * from 2 different pokemon
 * @function
 * @param {Event} e - The event triggered by the button
 */
startBattleBtns.forEach(btn => {
  btn.addEventListener('click', async e => {
    e.preventDefault()
    if (!resultsDiv.classList.contains("invisible")) {
      resultsDiv.classList.add("invisible")
    }
    
    // player can select the pokemon and sets the currentChoice to that pokemon
    if(e.target.id === 'choice1Btn'){
      currentChoice = 1
    }else if(e.target.id === 'choice2Btn'){
      currentChoice = 2
    }

    /**
     * set each pokemon points
     */
    await setPokemonPoints(p1, p2);
    showStats(p1, p2);
    /**
     * Paints the sprites
     */
    drawPokemons()
    /**
     * Triggers the game logic after 1 second
     */
    setTimeout(playMatch, 1000)
  });
})
