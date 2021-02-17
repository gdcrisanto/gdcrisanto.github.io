 const TaskHeader = ({tasks}) => {
    const number = tasks.length;

    if (number !== 0){
        return (
            <div className="task-header">
                <h3>You have {number} active tasks!</h3>
            </div>       
        )
    }
    else {
        return (
            <div className="task-header">
                <h3>You no active tasks</h3>
            </div> 
        )
    }
}

export default TaskHeader