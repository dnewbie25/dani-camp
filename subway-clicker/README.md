# Subway Clicker v1.0

This app counts how many clicks you can make. You can help yourself to the toppings to increase your clicks per second.

## Live Preview

![firefox_DSfxXGP4Gm](https://github.com/user-attachments/assets/f9f9b3a6-d9c2-4a1a-ace2-a73722f92722)

## Live Site

[Subway Clicker](https://subway-clicker.netlify.app/)

## How to use

Just click the giant sandwich and add the toppings.

## How it Works

The Subway Clicker works by counting each click you press. Every topping has a different modifier that will increase the total number of clicks added per second. The higher you have the `subs/sec` value, the less you will need to click to reach the number of subways you want.

Each topping has a different modification value that corresponds to a portion of a click:

- Tomatoes: `0.01`
- Lettuce: `0.05`
- Onions: `0.07`
- Roast Beef: `0.1`

All styles were handled using `SASS` to compile to a `CSS` file in the path `css/main.css`.

Although the code is mostly handled with `setTimeout` for the sound and `setInterval` for the subs/second feature, there is a function that takes the values and modifies them to be formatted in a standard decimal representation of a comma every three decimal places. The function is called `numberFormat`.

That function is used as a module and tested against 8 cases using `Vitest`. The test can be found in the path `src/numberFormat.test.js`.

