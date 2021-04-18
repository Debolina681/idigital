import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import productReducers from './productReducers';
import errorReducer from './errorReducer';
export default combineReducers({
   errorReducer:errorReducer,
   categories:categoriesReducer,
   products:productReducers

});