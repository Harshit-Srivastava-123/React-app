import React from "react";

function TaskList({ tasks = [], onToggle }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => onToggle(index)} // Call the onToggle function passed as a prop
                />
                {task}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default TaskList;
