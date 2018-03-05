import {combineReducers} from 'redux';

import counterReducer from './counterReducer';
import selectionReducer from './selectionReducer';

export default reducers=combineReducers({
  counterReducer,
  selectionReducer
})