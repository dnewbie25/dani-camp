# NPM Pokémon API v1.0.0

This app is a basic npm package that pulls info about a particular pokemon from the PokéAPI.
It will retrieve the following information:

- Name
- Type of the Pokémon
- Abilities separated by a comma
- Weight of the Pokémon in pounds `lbs`
- Base experience of the Pokémon

## How to Use

Install the package by using: 
```bash
npm install npm-poke-api
```

After that, you can retrieve the data of the Pokémon you choose by using:

```bash
pokemon-cli get-pokemon --pokemon=<pokémonName>
```

## Use Example

If after installing you type:

```bash
pokemon-cli get-pokemon --pokemon=chikorita
```

You will see:

```bash
chikorita, of type grass has these abilities: overgrow, leaf-guard. This pokémon weighs around 64 lbs and has a base experience of 64
```