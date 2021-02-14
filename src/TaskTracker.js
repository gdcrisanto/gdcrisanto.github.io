import React from "react";
import { useState } from 'react'

const TaskForm = ({onAdd}) => {
    const [text,setText] = useState('')


    return (
        <form onSubmit ={(e) => {
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
        <div>
            {tasks.map((task) => (
                <div key={task.id} onClick={() => onDelete(task.id)}>{task.text}</div>
            ))}
        </div>
    )
}

const TaskTracker = () => {
    const [tasks, setTasks] = useState([
        {
            text: 'Study React',
            id: 1,
        },
        {
            text: 'Play Genshin Impact',
            id: 2,
        },
        {
            text: 'Cook Food',
            id: 3,
        },
        {
            text: 'Watch Tv',
            id: 4,
        },
    ])

    const AddTask =(task) =>{

        const id = ++tasks.length;
        const newTask = {text: task, id: id};
        setTasks([...tasks,newTask]);
        console.log();

    }

    const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}
    
    return (
        <>
            <TaskForm onAdd={AddTask}/>
            <TaskItems tasks={tasks} onDelete={DeleteTask}/>
        </>
    );
    
}


export default TaskTracker;