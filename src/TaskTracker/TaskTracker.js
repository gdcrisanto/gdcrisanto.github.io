import React from "react";
import "./TaskTracker.css";
import {useSelector, useDispatch} from 'react-redux';
import {initItems} from './../actions';
import TaskHeader from './TaskHeader';
import TaskForm from './TaskForm';
import TaskItems from './TaskItems';


const TaskTracker = () => {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const AddTask = (task) =>{
        const id = task+Math.floor(Math.random() * 9999);
        const newTask = {text: task, id:id};
        const newTasks = {tasks: [...tasks,newTask]}
        dispatch(initItems(newTasks.tasks));
    }

    const DeleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id)
        dispatch(initItems(filteredTasks));
    }
    
    return (
        <div className="task-container">
            <TaskHeader tasks={tasks}/>
            <TaskForm onAdd={AddTask}/>
            <TaskItems tasks={tasks} onDelete={DeleteTask}/>
        </div>
    );
    
}


export default TaskTracker;