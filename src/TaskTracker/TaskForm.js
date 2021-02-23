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
            <input class="input-text" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <input class="btn" type="submit" value="Submit"/>
        </form>
    )
}

export default TaskForm;