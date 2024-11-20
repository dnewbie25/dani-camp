# Basic ToDo App

This app is very basic but its main purpose was to understand how to work with Typescript along Webpack.

## Live Preview

_[ToDo App](https://playful-pastelito-d60a65.netlify.app/)_

## Required NPM packages

- `Webpack`, for bundling
- `Typescript`, for type checking
- `copy-webpack-plugin`, for handling the HTML when bundling
- `uuid`, to add a unique ID to each element in the UI, this one for tracking purposes to add a feature to delete the element in the future

## How it works

The source code inside the `src` folder gets bundled into a `dist` folder. The Typescript file called `index.ts` is then compiled into that same folder as `main.js`, which will serve the JavaScript code to the index.html file. 
The `index.html` file inside `src` will be added to the `dist` folder thanks to the `copy-webpack-plugin`, which will add a copy of it into that folder when bundling.

## Credits

Credits to the authors of the videos that helped me set up this project.

_[How To Build Your First TypeScript Project by Web Dev Simplified](https://www.youtube.com/watch?v=jBmrduvKl5w)_

_[Creating a Modern Webpack 5, TypeScript, and TailwindCSS Web Project by Code with Ahsan](https://www.youtube.com/watch?v=2JKGGMD4fXk)_
