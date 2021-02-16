//reducer -> how to transition states
const updateTasks = (state = [], action) => {
  switch(action.type){
    case 'initItems':
      return (state = action.payload)
    case 'returnItems':
      return state;
    default : 
      return state;
      }
    }

export default updateTasks;