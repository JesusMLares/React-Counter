import React, { useState } from "react";
import NameGreeting from "./NameGreeting";

function App() {
  const [counter, setCounter] = useState(0);
  window.setCounter = setCounter;

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const name = "Jesus"

  return (
    <div className= "App">
      <h1>Counter</h1>
      <h2>Current counter is: {counter}</h2>

      <button onClick={handleDecrement} disabled={counter === 0}>-1</button>
      <button onClick={handleIncrement}>+1</button>

      {/* Pass name as a prop to NameGreeting */}
      <NameGreeting name = {name}/>
    </div>
    
  );
}

export default App;