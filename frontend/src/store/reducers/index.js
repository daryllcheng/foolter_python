import { combineReducers } from 'redux';
import foodsReducer from './foods_reducer';

export default combineReducers({
  foods: foodsReducer
});