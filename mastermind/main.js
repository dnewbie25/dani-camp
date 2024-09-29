const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const exact = document.getElementById('exact');
const partial = document.getElementById('partial');
const resultText = document.getElementById('resultText');
const totalDigits = document.getElementById('digitsInput');

// Generate a random code of a size defined by you
let code = [];
let size = Number(prompt("How long do you want the code to be? Enter a number"))

for (let i = 0; i < Number(size); i++) {
    code.push(Math.floor(Math.random() * 10));
}
// to peek at the code
console.log(code);

// player will have only 10 attempts
let attempts = 10;

while (attempts > 0) {
    let guessInput = prompt(`Enter your guess (${size} digits). Attempts remaining: ` + attempts);
    // creates a regex that matches a string the a total number of digits equal to size
    let re = new RegExp(String.raw`^\d{${size}}$`, "gi");
    // Validate input using RegEx to determine if there are 4 digits
    if (!re.test(guessInput)) {
        alert(`Invalid input. Please enter exactly ${size} digits (0-9).`);
        continue;
    }

    let guessDigits = guessInput.split('').map(Number); // creates an array from the input with numbers cast as Number
    let codeDigits = code.slice(); // Copy of the code digits

    let exactMatches = 0;
    let partialMatches = 0;

    let unmatchedCodeDigits = [];
    let unmatchedGuessDigits = [];

    // First, find exact matches
    for (let i = 0; i < size; i++) {
        if (guessDigits[i] === codeDigits[i]) {
            exactMatches++;
        } else {
            unmatchedCodeDigits.push(codeDigits[i]);
            unmatchedGuessDigits.push(guessDigits[i]);
        }
    }

    // Then find partial matches. 
    for (let i = 0; i < unmatchedGuessDigits.length; i++) {
        //
        let index = unmatchedCodeDigits.indexOf(unmatchedGuessDigits[i]);
        if (index !== -1) {
            partialMatches++;
            unmatchedCodeDigits.splice(index, 1); // Remove matched digit to prevent double counting
        }
    }

    console.log("Exact matches: " + exactMatches + ", Partial matches: " + partialMatches);
    console.log(exactMatches);
    
    if (exactMatches === size) {
        console.log("Congratulations! You guessed the code!");
        break;
    }

    attempts--;

    if (attempts === 0) {
        console.log("Sorry, you've used all attempts. The code was: " + code.join(''));
        break;
    }
}
