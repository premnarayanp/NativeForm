import formReducer from './formReducer';
import questionReducer from './questionReducer';
import { combineReducers } from 'redux';

//---------used predefined redux combined reducers--------
export default combineReducers({
  formReducer,
  questionReducer
});



