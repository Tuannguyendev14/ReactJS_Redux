import tasks from './tasks'      // reducer listall 
import isDisplayForm from './isDisplayForm'      // reducer listall 
import {combineReducers} from 'redux';


const myReducer = combineReducers({
     tasks, // display tasks
     isDisplayForm  // display isdisplay form
});

export default myReducer;