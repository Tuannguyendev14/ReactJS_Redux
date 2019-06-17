
import * as types from './../constants/actionTypes'

export const status = () => {
    return {
        type : types.TOOGLE_STATUS 
    }
}

export const sort = (sort) => {
    return {
        type : types.sort ,
        sort //sort : sort
    }
}

