import { useState, useEffect } from 'react';
import TaskRow from './components/taskrow';
import Sidebar from './components/sidebar';
import AddTaskForm from './components/AddTaskForm';
import BudgetCard from './components/BudgetCard';

const initialTasks = [
  { id:1, name: "Data structures assignment", priority: "High", minutes: 45 },
  { id:2, name: 'Codesignal Intro to React', priority: "High", minutes: 45 },
  { id:3, name: 'Assembler language Project 1', priority: "Medium", minutes: 45},
  { id:4, name: 'Codesignal Intro to Python', priority: "Medium", minutes: 45 },
  { id:5, name: 'Research for my masters degree', priority: "Low", minutes: 45}
]
function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : initialTasks
  })
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  const [showForm, setShowForm]= useState(false)
  const [budget,setBudget] = useState(300)
  function addTask(newTask){
    setTasks([...tasks, newTask]);
    setShowForm(false)
  }
  function deleteTask(idToDelete){
    setTasks(tasks.filter((task)=>task.id !== idToDelete))

  }
  const planned = tasks.reduce((sum, task) => sum + task.minutes, 0)
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <header className ="today-header">
          <div>
            <h1>Today</h1>
            <p className="date-line">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric"
              })}
            </p>
          </div>
          <button className="add-task-button" onClick={() => setShowForm(!showForm)}>
            +Add Task
            </button>
          </header>

          {showForm && <AddTaskForm onAdd={addTask} />}
          <div className="content">
            <section className="task-list">
              {tasks.map((task) => (
                <TaskRow
                  key={task.id}
                  name={task.name}
                  priority={task.priority}
                  minutes={task.minutes}
                  onDelete = {deleteTask}
                  id={task.id} 
                />
              ))} 
            </section>
            <BudgetCard budget={budget} planned={planned} />

          </div>

          
      </main>
    </div>
  )
}
export default App;