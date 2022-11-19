import { combineReducers } from 'redux';
import { rootReducer } from './rootReducer'

const reducers = combineReducers({
  root: rootReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;