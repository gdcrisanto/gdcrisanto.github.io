//action -> what you want to do with your store
export const initItems = (Tasks) =>{
  return {
    type: 'initItems',
    payload: Tasks
  }
}