import { useState } from "react";
function TaskRow({ id, name, priority, minutes, onDelete }) {
    const [done, setDone] = useState(false);
  return (
    <div className={done ? 'task-row done' : 'task-row'}>
        <button className = "checkbox" onClick={() => setDone(!done)}>{done ? '✓' : ''}</button>
      <span className="task-name">{name}</span>
      <span className={`chip ${priority.toLowerCase()}`}>{priority}</span>
      <span className="task-time">{minutes} min</span>
      <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default TaskRow;