# Subway Clicker v1.0

This app is a counter of how many clicks you can make. You can help yourself of the toppings to increase your clicks per second.

## How to use

Just click the giant sandwich and add the toppings.

## How it Works

The Subway Clicker works by counting each click you press. Every topping has a different modifier that will increase the total numbers of clicks added per second. The higher you have the `subs/sec` value, the less you will need to click to reach the number of subways you want.

Each topping has a different modification value that corresponds to a portion of a click:

- Tomatoes: `0.01`
- Lettuce: `0.05`
- Onions: `0.07`
- Roast Beef: `0.1`

All styles were handling using `SAAS` to compile to a `CSS` file in the path `css/main.css`.

Although the code is mostly handled with `setTimeout` for the sound and `setInterval` for the subs/second feature, there is a function that take the values and modifies it to be formatted in a standard decimal representation of a comma every 3 decimal places. The function is called `numberFormat`.

That function is used as a module and is also tested against 8 cases using `Vitest`. The test can be found in the path `src/numberFormat.test.js`.