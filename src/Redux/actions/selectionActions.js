

export const getSelection=()=>{
  return {
    type:'GET_SELECTION'
  }
}

export const addSelection=(number)=>{
  return {
    type:'ADD',
    number
  }
}

export const deleteSelection=(numberId)=>{
  return {
    type:'DELETE',
    numberId
  }
}