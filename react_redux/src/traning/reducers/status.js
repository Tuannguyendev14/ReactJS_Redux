var initialState = false;

var myReducer = (state = initialState, action )=>{
    if(action.type==='TOOGLE_STATUS'){
        state = !state;
    }
    return state;
}

export default myReducer;