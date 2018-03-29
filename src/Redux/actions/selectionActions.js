

export const getSelection = () => ({
  type: 'GET_SELECTION',
});

export const addSelection = number => ({
  type: 'ADD',
  number,
});

export const deleteSelection = numberId => ({
  type: 'DELETE',
  numberId,
});
