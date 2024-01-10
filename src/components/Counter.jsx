import { useState } from "react";

const Counter = (props) => {
  const handleClick = (operation) => {
    props.update(operation);
  };
  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick={() => handleClick("decrement")}>
        -
      </button>
      <button className="counter-button" onClick={() => handleClick("increment")}>
        +
      </button>
    </div>
  );
};

export default Counter;
