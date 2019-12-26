import {
    ADD_PRODUCT,
    SUCCESS_ADD_PRODUCT,
    FAILURE_ADD_PRODUCT
} from '../types/product.types';

const initialState = {
    data : [],
    error:null
}

export default function form(state = initialState,action){
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                error:null
            }
        case SUCCESS_ADD_PRODUCT:
            return {
                ...state,
                error:null,
                data:[...state.data,action.payload]
            }
        case FAILURE_ADD_PRODUCT:
            return {
                ...state,
                error:true
            }        
        default:
            return state;
    }
} 