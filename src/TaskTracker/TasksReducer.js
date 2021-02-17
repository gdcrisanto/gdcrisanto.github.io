//reducer -> how to transition states
const updateTasks = (state = [
  {
    "text": "Study React",
    "id": 0
  },
  {
    "text": "Play Genshin Impact",
    "id": 1
  },
  {
    "text": "Cook Food",
    "id": 2
  },
  {
    "text": "Watch Tv",
    "id": 3
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