//reducer -> how to transition states
const updateTasks = (state = [
  {
    "text": "Study Web Development",
    "id": 0
  },
  {
    "text": "Play video games",
    "id": 1
  },
  {
    "text": "Cook food",
    "id": 2
  },
  {
    "text": "Listen to music",
    "id": 3
  },
  {
    "text": "Sketch portraits",
    "id": 4
  }
], action) => {
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