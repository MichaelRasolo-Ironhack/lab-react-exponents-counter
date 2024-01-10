import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function update(operation) {
    if (operation === "increment") {
      return setCount((prevCount) => prevCount + 1);
    } else if (operation === "decrement") {
      return setCount((prevCount) => prevCount - 1);
    }
  }
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter update={update} count={count} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <ExponentTwo count={count}/>
        <ExponentThree count={count}/>
        <ExponentFour count={count}/>
        <ExponentFive count={count} />
        <ExponentSix count={count}/>
      </div>
    </div>
  );
}

export default App;
