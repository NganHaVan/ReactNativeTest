let initialId=0
export default selectionReducer=(selection=[],action)=>{
  switch (action.type) {
    case 'GET_SELECTION':
      return [...selection]
    
    case 'ADD':
      return [...selection,{
        numberId:(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase(),
        number:action.number
      }]
      
    case 'DELETE':
      const selectedId=selection.findIndex(selected=>selected.numberId===action.numberId);
      return [...selection.slice(0,selectedId),...selection.slice(selectedId+1)];
  
    default:
      return selection;
  }
}