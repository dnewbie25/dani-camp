import { useState } from "react";
import "./App.css";
import Die from "./Die";
import { nanoid } from 'nanoid';

function App() {
  const [numbers, setNumbers] = useState(generateAllNewDice());
  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({ 
        value: Math.ceil(Math.random() * 6), 
        isHeld: true,
        id: nanoid()
      }));
  }
  const dices = numbers.map((number) => (
    <Die value={number.value} key={number.id} isHeld={number.isHeld}/>
  ));
  
  function rollDice() {
    setNumbers(generateAllNewDice());
  }

  return (
    <main>
      <div className="dice-container">{dices}</div>
      <button onClick={rollDice} className="roll-dice">
        Roll
      </button>
    </main>
  );
}

export default App;
