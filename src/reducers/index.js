import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import chat from './chat';

const rootReducer = combineReducers({
  chat,
  toastr: toastrReducer,
});

export default rootReducer;
