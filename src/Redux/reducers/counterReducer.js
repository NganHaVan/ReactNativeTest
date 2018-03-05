let initialNumber=0;

export default counterReducer=(state=initialNumber,action)=>{
  switch (action.type) {
    case 'INCREMENT':
      return state+1
    
    case 'DECREMENT':
      return state-1
  
    default:
      return state;
  }
}