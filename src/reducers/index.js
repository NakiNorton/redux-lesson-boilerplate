import { combineReducers } from 'redux';
import { todos } from './todos';
import { displayFilter } from './displayFilter';

const rootReducer = combineReducers({
  todos,
  displayFilter
});

export default rootReducer;