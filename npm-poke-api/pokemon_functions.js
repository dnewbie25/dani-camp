async function getPokemon(pokemonName) {
  const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  return url.json()
}

function formatPokemon(pokemon) {
  let abilities = getAbilities(pokemon)
  let type = pokemon.types[0].type.name
  let weight = pokemon.weight
  let baseExperience = pokemon.base_experience
  return `${pokemon.species.name}, of type ${type} has these abilities: ${abilities.join(', ')}. This pokémon weighs around ${weight} lbs and has a base experience of ${baseExperience}`
}

function getAbilities(pokemonInfo) {
  let abilities = []
  pokemonInfo.abilities.forEach(ability => {
    abilities.push(ability.ability.name)
  });
  return abilities
}

module.exports = {getPokemon, formatPokemon}