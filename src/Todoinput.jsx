import React, { useState } from "react";
import "./Todoinput.css";

function Todoinput(props) {
  const [inputbox, setInputText] = useState("");

  // Function to handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/;
    if (regex.test(value)) {
      setInputText(value);
    }
  };

  return (
    <>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter the value"
          className="input-box"
          value={inputbox}
          onChange={handleInputChange}
        />
        <button
          className="add-btn"
          onClick={() => {
            if (inputbox.trim()) {
              props.addList(inputbox);
              setInputText("");
            }
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Todoinput;
