# Mastermind

This is our version of the Mastermind app, the popular game where the goal is to crack and decipher a random code. 

## How to use

The app contains the following fields:


`How many digits you want? Enter a number` - Accepts a number representing the total number of digits the code has. Once this data is passed, click on `Generate Random Number`. It will then create a random number and you will see the input field to put your guesses.

`Guess the number. Enter a number with XX digits` (required) - Accepts a number. It must be the same length as the digits you defined. This field will appear once a random code to break has been created


Your goal is to try to find the code within 10 attempts. You will get hints like total number of digits that match and are in the correct position, as well as the total number of digits that match but are in the wrong position.

For example, if the code is `2345`. If you guess `2739` you will get feedback saying that `2` digits match, but `1` is in the incorrect position. With this limited amount of information you should find the correct code.