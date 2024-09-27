#!/usr/bin/env node
const yargs = require('yargs')
const {getPokemon, formatPokemon} = require('./pokemon_functions')

yargs.command(
  {
    command: 'get-pokemon',
    describe: 'Gets the data of a pokemon in an easy to read format',
    builder: {
      pokemon: {
        describe: 'Pokemon name to fetch',
        demandOptions: true, // this means it will be required
        type: 'string'
      }
    },
    handler: async (argv)=> { // argv are the arguments passed
      try {
        const response = await getPokemon(argv.pokemon);
        console.log(formatPokemon(response));
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
  })
  .demandCommand(1, 'You need to specify at least one command')
  .help()
  .alias('help', 'h')
  .argv;

yargs.parse()

