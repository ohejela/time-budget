import { useState } from "react";
function TaskRow({ name, priority, minutes }) {
    const [done, setDone] = useState(false);
  return (
    <div className={done ? 'task-row done' : 'task-row'}>
        <button className = "checkbox" onClick={() => setDone(!done)}>{done ? '✓' : ''}</button>
      <span className="task-name">{name}</span>
      <span className={`chip ${priority.toLowerCase()}`}>{priority}</span>
      <span className="task-time">{minutes} min</span>
    </div>
  )
}

export default TaskRow;