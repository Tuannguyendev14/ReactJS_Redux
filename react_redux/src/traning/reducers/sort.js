
var initialState = {
    by: 'status',
    value : 1 
}


var myReducer = (state = initialState, action )=>{
    if(action.type==='sort'){
        var {by, value} = action.sort; // by: action.sort.by, value: action.sort.value
        return {by,value}
    }
    return state;

}
export default myReducer;