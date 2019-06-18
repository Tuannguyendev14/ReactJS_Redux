//import thu vien cua redux 
import {createStore} from 'redux';
import {status,sort } from './traning/actions/index';
import myReducer from './traning/reducers/index';


// da chia cac components
//Dinh nghia store
const store = createStore(myReducer);
console.log("Default : " , store.getState());

store.dispatch(status());	
console.log("TOOGLE_STATUS : " , store.getState());

store.dispatch(sort({
    by: 'name',
     value : -1
}));
console.log("sort : " , store.getState());



// chua chia cac components

// var initialState = {
//     status:false ,
//     sort: {
//         by: 'name',
//         value : 1 
//     }
// }

// var myReducer = (state = initialState, action )=>{
//     if(action.type==='TOOGLE_STATUS'){
//         state.status= !state.status;
//     }
//     if(action.type==='sort'){
//         var {by, value} = action.sort; // by: action.sort.by, value: action.sort.value
//         var{status} = state;  // state.status
//         return {
//             status: status ,
//             sort: {
//                 by: by,
//                 value : value 
//             }
//         }
//     }
//     return state;
// }

// //Dinh nghia store
// const store = createStore(myReducer);


// console.log("Default : " , store.getState());

// // Thuc hien cong viec thay doi status
// var action = {type: 'TOOGLE_STATUS'};
// store.dispatch(action);	
// console.log("TOOGLE_STATUS : " , store.getState());

// // Thuc hien cong viec sap xep tu z den a
// var sortAction = {
//     type: 'sort',
//     sort: {
//         by: 'name',
//         value : -1 
//     }
// } 
// store.dispatch(sortAction);
// console.log("sort : " , store.getState());
