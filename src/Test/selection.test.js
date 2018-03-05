import selectionReducer from '../Redux/reducers/selectionReducer';

import * as allActions from '../Redux/actions/selectionActions';


describe('selection reducer',()=>{
  const data=[
    {
      numberId:'JEE7FQMKZF8KK',
      number:10
    },
    {
      numberId:'JEE7FTWYA98BQ',
      number:15
    }
  ];
  it('handles GET_SELECTION',()=>{

    const getAction=allActions.getSelection();

    expect(selectionReducer(data,getAction)).toEqual(data);
  });
  it('handles ADD_SELECTION',()=>{
    const addAction=allActions.addSelection(20);
    console.log("====DATA AFTER ADD====");
    console.log(selectionReducer(data,addAction));
    console.log("====END====");

  });
  it('handle DELETE_SELECTION',()=>{
    const deleteAction=allActions.deleteSelection(data[0].numberId);
    console.log("====DATA AFTER DELETE====");
    console.log(selectionReducer(data,deleteAction));
    console.log("====END====");
  })
})