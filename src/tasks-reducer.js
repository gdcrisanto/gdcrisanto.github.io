//reducer -> how to transition states
const updateTasks = (state = [
        {
            text: 'Study React',
            id: 0,
        },
        {
            text: 'Play Genshin Impact',
            id: 1,
        },
        {
            text: 'Cook Food',
            id: 2,
        },
        {
            text: 'Watch Tv',
            id: 3,
        },
    ], action) => {
  switch(action.type){
    case 'addItem':
      return ([...state, action.payload]);
    case 'removeItem':
      return (state = action.payload);
      }
      return state
    }

export default updateTasks;