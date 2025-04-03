import { useState } from "react";
import "./App.css";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useRef } from "react";
import { useEffect } from "react";

/**
 * Represents the main component of the Tenzies game.
 * 
 * Manages the state of the dice, checks for a win condition,
 * and handles interactions such as rolling the dice and holding
 * individual dice. When all dice are held and have the same value,
 * the game is considered won, and a confetti animation is triggered.
 * A new game can be started by clicking the button when the game is won.
 */

function App() {
  const [numbers, setNumbers] = useState(() => generateAllNewDice());
  let gameWon = false;
  const buttonRef = useRef(null);

  if (
    numbers.every((item) => item.isHeld === true) &&
    numbers.every((item) => item.value === numbers[0].value)
  ) {
    gameWon = true;
  }

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  /**
   * Generates a new set of ten dice with random values.
   * Each die in the set is an object with the following properties:
   * - value: a random number between 1 and 6 (inclusive)
   * - isHeld: a boolean flag indicating whether the die is being held or not
   * - id: a unique id for the die, generated using nanoid
   * @returns {Array<Object>} an array of ten objects representing the dice
   */
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  const dices = numbers.map((number) => (
    <Die
      value={number.value}
      key={number.id}
      isHeld={number.isHeld}
      hold={() => hold(number.id)}
    />
  ));

  /**
   * Generates a new set of dice if the game has been won.
   * Otherwise, generates new values for all the dice that are not being held.
   */
  function rollDice() {
    if (gameWon) {
      setNumbers(generateAllNewDice());
    } else {
      setNumbers((prev) =>
        prev.map((item) => {
          return !item.isHeld
            ? { ...item, value: Math.ceil(Math.random() * 6) }
            : item;
        })
      );
    }
  }

/**
 * Toggles the `isHeld` property of a die with the given id.
 * 
 * @param {string} id - The unique identifier of the die whose hold state is being toggled.
 */
  function hold(id) {
    setNumbers((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{dices}</div>
      <button ref={buttonRef} onClick={rollDice} className="roll-dice">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
