import { useState } from "react";
import "./App.css";
import Die from "./Die";
function App() {
  const [numbers, setNumbers] = useState(generateAllNewDice());
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }
  const dices = numbers.map((number) => (
    <Die value={number} />
  ));

  return (
    <main>
      <div className="dice-container">{dices}</div>
    </main>
  );
}

export default App;
