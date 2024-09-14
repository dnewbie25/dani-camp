# Pokemon Random Battle

This small game was created to understand asynchronous programming better.

## How to use

It uses the [PokéAPI](https://pokeapi.co/) to retrieve two pokemons along with their name and their artwork. Then by clicking on `FIGHT!` you will get the two pokemons displayed on screen and the result of the match will be displayed

## Information

The app uses the pokemons' `id` number to decide the winner.

The functions are:

- `getRandomPokemon()`: Retrieves a random pokemon from the PokéAPI.
- `gatherPokemons()`: Retrieves two random pokemons from the PokéAPI and assigns their names to the `p1` and `p2` variables.
- `getPokemonImage(pokemon)`: Retrieves the image of a given pokemon from the PokéAPI.
- `setImages(pokemonName1, pokemonName2)`: Assigns the images of two pokemons to the `img1` and `img2` variables.
- `getPokemonId(pokemon)`: Retrieves the `id` of a given pokemon from the PokéAPI.
- `setPokemonPoints(pokemon1, pokemon2)`: Assigns the `id` of two pokemons to the `attack1` and `attack2` variables.
- `drawPokemons()`: Paints the names and images of the two pokemons on the screen.
- `playMatch()`: Displays the result of the match.

## Playing Preview

![gif_recording](https://github.com/user-attachments/assets/7bb2e65b-4f21-4c3c-a205-9003f73a6cd4)

## Future Features

<ul>
<li>Use at least one attack and one defense for each Pokemon, so if the attack can be blocked, the match ends in a draw</li>
<li>Have another button to dedice which move to make to attack</li>
</ul>
