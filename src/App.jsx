import TaskRow from './components/taskrow';
import Sidebar from './components/sidebar';

const tasks = [
  { id:1, name: "Data structures assignment", priority: "High", minutes: 45 },
  { id:2, name: 'Codesignal Intro to React', priority: "High", minutes: 45 },
  { id:3, name: 'Assembler language Project 1', priority: "Medium", minutes: 45},
  { id:4, name: 'Codesignal Intro to Python', priority: "Medium", minutes: 45 },
  { id:5, name: 'Research for my masters degree', priority: "Low", minutes: 45}
]
function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <h1>Time budget</h1>
        <p>Welcome to your time budget tracker!</p>
{tasks.map((task) => (
  <TaskRow
    key={task.id}
    name={task.name}
    priority={task.priority}
    minutes={task.minutes}
  />
))}      </main>
    </div>
  )
}
export default App;