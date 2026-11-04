import { useState } from 'react';
function AddTaskForm({onAdd}) {
    const [name, setName] = useState('');
    const [priority, setPriority] = useState('High');
    const [minutes, setMinutes] = useState(45);

    function handleSubmit(event) {
        event.preventDefault()
        if(name.trim() === '') 
            return;

        onAdd({
            id: Date.now(),
            name: name,
            priority: priority,
            minutes: Number(minutes),
        })

        setName('');
        setMinutes(45);
    }

    return(
        <form className="add-form" onSubmit = {handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Task name"
            />
            <select value={priority} onChange={(event) => setPriority(event.target.value)}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <input
                type="number"
                value={minutes}
                onChange={(event) => setMinutes(event.target.value)}
                
            />
            <button type="submit">Add Task</button>
        </form>
    )
}
export default AddTaskForm;