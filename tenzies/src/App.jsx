import { useState } from "react";
import "./App.css";
import Die from "./Die";
import { nanoid } from "nanoid";

function App() {
  const [numbers, setNumbers] = useState(generateAllNewDice());
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

  function rollDice() {
    setNumbers((prev) =>
      prev.map((item) => {
        return !item.isHeld
          ? { ...item, value: Math.ceil(Math.random() * 6) }
          : item;
      })
    );
  }

  function hold(id) {
    setNumbers((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">{dices}</div>
      <button onClick={rollDice} className="roll-dice">
        Roll
      </button>
    </main>
  );
}

export default App;
