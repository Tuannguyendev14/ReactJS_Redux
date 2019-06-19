import tasks from './tasks'      // reducer listall 
import isDisplayForm from './isDisplayForm'      // reducer listall 
import edit from './edit'      // reducer listall 
import filter  from './filterTable'      // reducer listall 
import search  from './search'      // reducer listall 
import sort  from './sort'      // reducer listall 
import {combineReducers} from 'redux';


const myReducer = combineReducers({
     tasks, // display tasks
     isDisplayForm ,
     edit ,
     filter, // display isdisplay form
     search,
     sort
});

export default myReducer;

