import React from "react";
import { useState } from "react";
import "./Hooks.css";
function Hooks() {
  const [count, setCount] = useState(0);

  function incrementState() {
    setCount(count + 1);
  }
  function decrementState() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="container">
        <h3 className="heading">The State are Change = {count}</h3>
        <button className="btn" onClick={incrementState}>
          incrementState
        </button>
        <button className="btn" onClick={decrementState}>
          decrementState
        </button>
      </div>
    </>
  );
}

export default Hooks;
