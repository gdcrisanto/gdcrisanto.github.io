//action -> what you want to do with your store
export const addItem = (newTask) =>{
  return {
    type: 'addItem',
    payload: newTask
  }
}
export const removeItem = (filteredTasks) =>{
  return {
    type: 'removeItem',
    payload: filteredTasks
  }
}