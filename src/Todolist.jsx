import React, { useState } from "react";
import "./Todolist.css";


function Todolist(props) {



  const [isChecked, setIsChecked] = useState(false);
  

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <ul className="list">
        <li className="li-item">{props.item}</li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Show Tasks
          </label>
        </li>
        {isChecked && <TaskList tasks={props.tasks} />}
        <i className="fa-solid fa-trash" onClick={props.removeItem}></i>
      </ul>
    </>
  );
}

export default Todolist;
