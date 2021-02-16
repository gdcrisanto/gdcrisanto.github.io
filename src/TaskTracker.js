import React from "react";
import "./App.css";
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from './actions';

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
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const AddTask = (task) =>{
        const id = task+Math.floor(Math.random() * 9999);
        const newTask = {text: task, id:id};
        dispatch(addItem(newTask));

    }

    const DeleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id)
        dispatch(removeItem(filteredTasks));
    }
    
    return (
        <div className="task-container">
            <TaskForm onAdd={AddTask}/>
            <TaskItems tasks={tasks} onDelete={DeleteTask}/>
        </div>
    );
    
}


export default TaskTracker;