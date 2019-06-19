import * as types from './../constants/actionType'

export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
} 
export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        task
    }
} 

export const toogleForm = () => {
    return {
        type : types.TOOGLE_FORM
        
    }
} 

export const closeForm = () => {
    return {
        type : types.CLOSE_FORM
        
    }
} 

export const openForm = () => {
    return {
        type : types.OPEN_FORM
        
    }
} 

export const updateStatus = (id)=>{
    return {
        type: types.UPDATE_STATUS,
        id
    }
}
 
export const deleteTask = (id)=>{
    return {
        type: types.DELETE,
        id
    }
}

export const updateTask = (task)=>{
    return {
        type: types.UPDATE,
        task
    }
}
 
export const filterTask = (filter)=>{
    return {
        type: types.FILTER,
        filter
    }
}

export const searchTask = (keyword)=>{
    return {
        type: types.SEARCH,
        keyword
    }
}

export const sortTask = (sort)=>{
    return {
        type: types.SORT,
        sort
    }
}