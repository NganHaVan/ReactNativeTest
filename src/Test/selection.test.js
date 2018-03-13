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
})