const TaskItems = ({tasks, onDelete}) => {
    return(
        <ul className="task-list">
            {tasks.map((task) => (
                <div className="list-group-item"  key={task.id} onClick={() => onDelete(task.id)}>{task.text}</div>
            ))}
        </ul>
    )
}

export default TaskItems;