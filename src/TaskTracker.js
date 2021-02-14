import React from "react";
import "./App.css";
import { useState } from 'react'

const TaskForm = ({onAdd}) => {
    const [text,setText] = useState('')


    return (
        <form className ="task-input"
            onSubmit ={(e) => {
         e.preventDefault();
         
        if(!text){
            alert('please add a task');
            return
        }

        onAdd(text);
        setText('');

     }} >
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        </form>
    )
}

const TaskItems = ({tasks, onDelete}) => {
    return(
        <ul className="task-list">
            {tasks.map((task) => (
                <div className="list-group-item"  key={task.id} onClick={() => onDelete(task.id)}>{task.text}</div>
            ))}
        </ul>
    )
}

const TaskTracker = () => {
    const [tasks, setTasks] = useState([
        {
            text: 'Study React',
            id: 0,
        },
        {
            text: 'Play Genshin Impact',
            id: 1,
        },
        {
            text: 'Cook Food',
            id: 2,
        },
        {
            text: 'Watch Tv',
            id: 3,
        },
    ])

    const AddTask =(task) =>{
        const id = task+Math.floor(Math.random() * 9999);
        const newTask = {text: task, id:id};
        setTasks([...tasks,newTask]);
        console.log(tasks);

    }

    const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}
    
    return (
        <div className="task-container">
            <TaskForm onAdd={AddTask}/>
            <TaskItems tasks={tasks} onDelete={DeleteTask}/>
        </div>
    );
    
}


export default TaskTracker;