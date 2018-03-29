/* eslint-env jest */

import counterReducer from '../Redux/reducers/counterReducer';
import * as actions from '../Redux/actions/counterActions';

describe('Counter reducer', () => {
  it('handles increment', () => {
    const newAction = actions.increment();
    expect(counterReducer(4, newAction)).toEqual(5);
  });
  it('handle decrement', () => {
    const newAction = actions.decrement();
    expect(counterReducer(5, newAction)).toEqual(4);
  });
});
